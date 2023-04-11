import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Request to filter Source Servers list.
 */
export declare class DescribeSourceServersRequestBodyFilters extends SpeakeasyBase {
    applicationIDs?: string[];
    isArchived?: boolean;
    lifeCycleStates?: shared.LifeCycleStateEnum[];
    replicationTypes?: shared.ReplicationTypeEnum[];
    sourceServerIDs?: string[];
}
export declare class DescribeSourceServersRequestBody extends SpeakeasyBase {
    /**
     * Request to filter Source Servers list.
     */
    filters?: DescribeSourceServersRequestBodyFilters;
    /**
     * Request to filter Source Servers list by maximum results.
     */
    maxResults?: number;
    /**
     * Request to filter Source Servers list by next token.
     */
    nextToken?: string;
}
export declare class DescribeSourceServersRequest extends SpeakeasyBase {
    requestBody: DescribeSourceServersRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeSourceServersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSourceServersResponse?: shared.DescribeSourceServersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
