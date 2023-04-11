import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDBSubnetGroupsActionEnum {
    DescribeDBSubnetGroups = "DescribeDBSubnetGroups"
}
export declare enum POSTDescribeDBSubnetGroupsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTDescribeDBSubnetGroupsRequest extends SpeakeasyBase {
    action: POSTDescribeDBSubnetGroupsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeDBSubnetGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeDBSubnetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
