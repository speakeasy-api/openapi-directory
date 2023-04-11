import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateContainerServiceDeploymentXAmzTargetEnum {
    Lightsail20161128CreateContainerServiceDeployment = "Lightsail_20161128.CreateContainerServiceDeployment"
}
export declare class CreateContainerServiceDeploymentRequest extends SpeakeasyBase {
    createContainerServiceDeploymentRequest: shared.CreateContainerServiceDeploymentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContainerServiceDeploymentXAmzTargetEnum;
}
export declare class CreateContainerServiceDeploymentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createContainerServiceDeploymentResult?: shared.CreateContainerServiceDeploymentResult;
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
