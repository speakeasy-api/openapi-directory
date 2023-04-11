import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDBSecurityGroupsActionEnum {
    DescribeDBSecurityGroups = "DescribeDBSecurityGroups"
}
export declare enum POSTDescribeDBSecurityGroupsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class POSTDescribeDBSecurityGroupsRequest extends SpeakeasyBase {
    action: POSTDescribeDBSecurityGroupsActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
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
