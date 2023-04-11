import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateContainerServiceRegistryLoginXAmzTargetEnum {
    Lightsail20161128CreateContainerServiceRegistryLogin = "Lightsail_20161128.CreateContainerServiceRegistryLogin"
}
export declare class CreateContainerServiceRegistryLoginRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContainerServiceRegistryLoginXAmzTargetEnum;
}
export declare class CreateContainerServiceRegistryLoginResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createContainerServiceRegistryLoginResult?: shared.CreateContainerServiceRegistryLoginResult;
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
