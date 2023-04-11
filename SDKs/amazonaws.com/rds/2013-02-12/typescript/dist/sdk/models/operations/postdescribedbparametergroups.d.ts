import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDBParameterGroupsActionEnum {
    DescribeDBParameterGroups = "DescribeDBParameterGroups"
}
export declare enum POSTDescribeDBParameterGroupsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class POSTDescribeDBParameterGroupsRequest extends SpeakeasyBase {
    action: POSTDescribeDBParameterGroupsActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeDBParameterGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeDBParameterGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
