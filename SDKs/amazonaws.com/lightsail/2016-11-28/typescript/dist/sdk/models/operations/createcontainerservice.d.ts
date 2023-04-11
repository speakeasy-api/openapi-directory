import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateContainerServiceXAmzTargetEnum {
    Lightsail20161128CreateContainerService = "Lightsail_20161128.CreateContainerService"
}
export declare class CreateContainerServiceRequest extends SpeakeasyBase {
    createContainerServiceRequest: shared.CreateContainerServiceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContainerServiceXAmzTargetEnum;
}
export declare class CreateContainerServiceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createContainerServiceResult?: shared.CreateContainerServiceResult;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
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
