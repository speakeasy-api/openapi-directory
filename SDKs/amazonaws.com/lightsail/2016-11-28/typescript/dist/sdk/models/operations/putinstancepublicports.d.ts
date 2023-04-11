import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutInstancePublicPortsXAmzTargetEnum {
    Lightsail20161128PutInstancePublicPorts = "Lightsail_20161128.PutInstancePublicPorts"
}
export declare class PutInstancePublicPortsRequest extends SpeakeasyBase {
    putInstancePublicPortsRequest: shared.PutInstancePublicPortsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutInstancePublicPortsXAmzTargetEnum;
}
export declare class PutInstancePublicPortsResponse extends SpeakeasyBase {
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
     * Success
     */
    putInstancePublicPortsResult?: shared.PutInstancePublicPortsResult;
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
