import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetReplicationRunsXAmzTargetEnum {
    AWSServerMigrationServiceV20161024GetReplicationRuns = "AWSServerMigrationService_V2016_10_24.GetReplicationRuns"
}
export declare class GetReplicationRunsRequest extends SpeakeasyBase {
    getReplicationRunsRequest: shared.GetReplicationRunsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetReplicationRunsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetReplicationRunsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getReplicationRunsResponse?: shared.GetReplicationRunsResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
