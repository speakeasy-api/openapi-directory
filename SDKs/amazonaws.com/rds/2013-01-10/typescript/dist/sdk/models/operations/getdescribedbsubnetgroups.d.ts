import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDBSubnetGroupsActionEnum {
    DescribeDBSubnetGroups = "DescribeDBSubnetGroups"
}
export declare enum GETDescribeDBSubnetGroupsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETDescribeDBSubnetGroupsRequest extends SpeakeasyBase {
    action: GETDescribeDBSubnetGroupsActionEnum;
    dbSubnetGroupName?: string;
    marker?: string;
    maxRecords?: number;
    version: GETDescribeDBSubnetGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDBSubnetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
