import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopInstanceXAmzTargetEnum {
    Lightsail20161128StopInstance = "Lightsail_20161128.StopInstance"
}
export declare class StopInstanceRequest extends SpeakeasyBase {
    stopInstanceRequest: shared.StopInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopInstanceXAmzTargetEnum;
}
export declare class StopInstanceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountSetupInProgressException
     */
    accountSetupInProgressException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * OperationFailureException
     */
    operationFailureException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * Success
     */
    stopInstanceResult?: shared.StopInstanceResult;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
