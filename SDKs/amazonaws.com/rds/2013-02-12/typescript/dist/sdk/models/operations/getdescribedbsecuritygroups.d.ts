import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDBSecurityGroupsActionEnum {
    DescribeDBSecurityGroups = "DescribeDBSecurityGroups"
}
export declare enum GETDescribeDBSecurityGroupsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETDescribeDBSecurityGroupsRequest extends SpeakeasyBase {
    action: GETDescribeDBSecurityGroupsActionEnum;
    dbSecurityGroupName?: string;
    marker?: string;
    maxRecords?: number;
    version: GETDescribeDBSecurityGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDBSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
