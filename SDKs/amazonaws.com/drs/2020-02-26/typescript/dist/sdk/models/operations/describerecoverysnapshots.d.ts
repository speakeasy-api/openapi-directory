import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A set of filters by which to return Recovery Snapshots.
 */
export declare class DescribeRecoverySnapshotsRequestBodyFilters extends SpeakeasyBase {
    fromDateTime?: string;
    toDateTime?: string;
}
/**
 * The sorted ordering by which to return Recovery Snapshots.
 */
export declare enum DescribeRecoverySnapshotsRequestBodyOrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare class DescribeRecoverySnapshotsRequestBody extends SpeakeasyBase {
    /**
     * A set of filters by which to return Recovery Snapshots.
     */
    filters?: DescribeRecoverySnapshotsRequestBodyFilters;
    /**
     * Maximum number of Recovery Snapshots to retrieve.
     */
    maxResults?: number;
    /**
     * The token of the next Recovery Snapshot to retrieve.
     */
    nextToken?: string;
    /**
     * The sorted ordering by which to return Recovery Snapshots.
     */
    order?: DescribeRecoverySnapshotsRequestBodyOrderEnum;
    /**
     * Filter Recovery Snapshots by Source Server ID.
     */
    sourceServerID: string;
}
export declare class DescribeRecoverySnapshotsRequest extends SpeakeasyBase {
    requestBody: DescribeRecoverySnapshotsRequestBody;
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
export declare class DescribeRecoverySnapshotsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeRecoverySnapshotsResponse?: shared.DescribeRecoverySnapshotsResponse;
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
    /**
     * ValidationException
     */
    validationException?: any;
}
