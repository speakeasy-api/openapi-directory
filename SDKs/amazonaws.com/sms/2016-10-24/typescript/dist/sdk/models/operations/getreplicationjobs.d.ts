import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetReplicationJobsXAmzTargetEnum {
    AWSServerMigrationServiceV20161024GetReplicationJobs = "AWSServerMigrationService_V2016_10_24.GetReplicationJobs"
}
export declare class GetReplicationJobsRequest extends SpeakeasyBase {
    getReplicationJobsRequest: shared.GetReplicationJobsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetReplicationJobsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetReplicationJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getReplicationJobsResponse?: shared.GetReplicationJobsResponse;
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
