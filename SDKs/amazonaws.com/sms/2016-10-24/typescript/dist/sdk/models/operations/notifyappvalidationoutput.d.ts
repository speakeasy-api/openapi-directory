import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum NotifyAppValidationOutputXAmzTargetEnum {
    AWSServerMigrationServiceV20161024NotifyAppValidationOutput = "AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput"
}
export declare class NotifyAppValidationOutputRequest extends SpeakeasyBase {
    notifyAppValidationOutputRequest: shared.NotifyAppValidationOutputRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: NotifyAppValidationOutputXAmzTargetEnum;
}
export declare class NotifyAppValidationOutputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalError
     */
    internalError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * Success
     */
    notifyAppValidationOutputResponse?: Record<string, any>;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
