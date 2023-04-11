import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeGlobalReplicationGroupsActionEnum {
    DescribeGlobalReplicationGroups = "DescribeGlobalReplicationGroups"
}
export declare enum POSTDescribeGlobalReplicationGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTDescribeGlobalReplicationGroupsRequest extends SpeakeasyBase {
    action: POSTDescribeGlobalReplicationGroupsActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeGlobalReplicationGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeGlobalReplicationGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
