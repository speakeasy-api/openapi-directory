import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum OpenInstancePublicPortsXAmzTargetEnum {
    Lightsail20161128OpenInstancePublicPorts = "Lightsail_20161128.OpenInstancePublicPorts"
}
export declare class OpenInstancePublicPortsRequest extends SpeakeasyBase {
    openInstancePublicPortsRequest: shared.OpenInstancePublicPortsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: OpenInstancePublicPortsXAmzTargetEnum;
}
export declare class OpenInstancePublicPortsResponse extends SpeakeasyBase {
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
     * Success
     */
    openInstancePublicPortsResult?: shared.OpenInstancePublicPortsResult;
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
