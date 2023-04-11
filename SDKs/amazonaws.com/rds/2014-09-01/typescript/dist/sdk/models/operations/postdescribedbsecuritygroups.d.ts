import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDBSecurityGroupsActionEnum {
    DescribeDBSecurityGroups = "DescribeDBSecurityGroups"
}
export declare enum POSTDescribeDBSecurityGroupsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTDescribeDBSecurityGroupsRequest extends SpeakeasyBase {
    action: POSTDescribeDBSecurityGroupsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeDBSecurityGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeDBSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
