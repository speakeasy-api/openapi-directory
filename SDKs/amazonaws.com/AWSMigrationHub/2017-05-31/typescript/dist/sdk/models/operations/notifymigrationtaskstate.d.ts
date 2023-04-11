import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum NotifyMigrationTaskStateXAmzTargetEnum {
    AWSMigrationHubNotifyMigrationTaskState = "AWSMigrationHub.NotifyMigrationTaskState"
}
export declare class NotifyMigrationTaskStateRequest extends SpeakeasyBase {
    notifyMigrationTaskStateRequest: shared.NotifyMigrationTaskStateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: NotifyMigrationTaskStateXAmzTargetEnum;
}
export declare class NotifyMigrationTaskStateResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * DryRunOperation
     */
    dryRunOperation?: any;
    /**
     * HomeRegionNotSetException
     */
    homeRegionNotSetException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    notifyMigrationTaskStateResult?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedOperation
     */
    unauthorizedOperation?: any;
}
