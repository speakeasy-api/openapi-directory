import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteProgressUpdateStreamXAmzTargetEnum {
    AWSMigrationHubDeleteProgressUpdateStream = "AWSMigrationHub.DeleteProgressUpdateStream"
}
export declare class DeleteProgressUpdateStreamRequest extends SpeakeasyBase {
    deleteProgressUpdateStreamRequest: shared.DeleteProgressUpdateStreamRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProgressUpdateStreamXAmzTargetEnum;
}
export declare class DeleteProgressUpdateStreamResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteProgressUpdateStreamResult?: Record<string, any>;
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
