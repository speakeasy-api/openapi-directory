import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartInstanceXAmzTargetEnum {
    Lightsail20161128StartInstance = "Lightsail_20161128.StartInstance"
}
export declare class StartInstanceRequest extends SpeakeasyBase {
    startInstanceRequest: shared.StartInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartInstanceXAmzTargetEnum;
}
export declare class StartInstanceResponse extends SpeakeasyBase {
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
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * Success
     */
    startInstanceResult?: shared.StartInstanceResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
