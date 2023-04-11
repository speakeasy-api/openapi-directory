import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeOptionGroupsActionEnum {
    DescribeOptionGroups = "DescribeOptionGroups"
}
export declare enum POSTDescribeOptionGroupsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDescribeOptionGroupsRequest extends SpeakeasyBase {
    action: POSTDescribeOptionGroupsActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeOptionGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeOptionGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
