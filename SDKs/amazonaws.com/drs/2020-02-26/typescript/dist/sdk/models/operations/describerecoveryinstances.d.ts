import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A set of filters by which to return Recovery Instances.
 */
export declare class DescribeRecoveryInstancesRequestBodyFilters extends SpeakeasyBase {
    recoveryInstanceIDs?: string[];
    sourceServerIDs?: string[];
}
export declare class DescribeRecoveryInstancesRequestBody extends SpeakeasyBase {
    /**
     * A set of filters by which to return Recovery Instances.
     */
    filters?: DescribeRecoveryInstancesRequestBodyFilters;
    /**
     * Maximum number of Recovery Instances to retrieve.
     */
    maxResults?: number;
    /**
     * The token of the next Recovery Instance to retrieve.
     */
    nextToken?: string;
}
export declare class DescribeRecoveryInstancesRequest extends SpeakeasyBase {
    requestBody: DescribeRecoveryInstancesRequestBody;
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
export declare class DescribeRecoveryInstancesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeRecoveryInstancesResponse?: shared.DescribeRecoveryInstancesResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
