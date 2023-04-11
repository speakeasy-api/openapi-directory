import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CloseInstancePublicPortsXAmzTargetEnum {
    Lightsail20161128CloseInstancePublicPorts = "Lightsail_20161128.CloseInstancePublicPorts"
}
export declare class CloseInstancePublicPortsRequest extends SpeakeasyBase {
    closeInstancePublicPortsRequest: shared.CloseInstancePublicPortsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CloseInstancePublicPortsXAmzTargetEnum;
}
export declare class CloseInstancePublicPortsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountSetupInProgressException
     */
    accountSetupInProgressException?: any;
    /**
     * Success
     */
    closeInstancePublicPortsResult?: shared.CloseInstancePublicPortsResult;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}
