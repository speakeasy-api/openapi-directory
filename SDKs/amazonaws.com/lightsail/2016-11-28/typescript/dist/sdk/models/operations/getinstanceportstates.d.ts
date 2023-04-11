import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetInstancePortStatesXAmzTargetEnum {
    Lightsail20161128GetInstancePortStates = "Lightsail_20161128.GetInstancePortStates"
}
export declare class GetInstancePortStatesRequest extends SpeakeasyBase {
    getInstancePortStatesRequest: shared.GetInstancePortStatesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstancePortStatesXAmzTargetEnum;
}
export declare class GetInstancePortStatesResponse extends SpeakeasyBase {
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
     * Success
     */
    getInstancePortStatesResult?: shared.GetInstancePortStatesResult;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
