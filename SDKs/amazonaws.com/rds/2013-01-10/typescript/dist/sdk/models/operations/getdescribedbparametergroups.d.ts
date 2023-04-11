import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDBParameterGroupsActionEnum {
    DescribeDBParameterGroups = "DescribeDBParameterGroups"
}
export declare enum GETDescribeDBParameterGroupsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETDescribeDBParameterGroupsRequest extends SpeakeasyBase {
    action: GETDescribeDBParameterGroupsActionEnum;
    dbParameterGroupName?: string;
    marker?: string;
    maxRecords?: number;
    version: GETDescribeDBParameterGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDBParameterGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
