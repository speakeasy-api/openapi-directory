import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetContainerServiceDeploymentsXAmzTargetEnum {
    Lightsail20161128GetContainerServiceDeployments = "Lightsail_20161128.GetContainerServiceDeployments"
}
export declare class GetContainerServiceDeploymentsRequest extends SpeakeasyBase {
    getContainerServiceDeploymentsRequest: shared.GetContainerServiceDeploymentsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContainerServiceDeploymentsXAmzTargetEnum;
}
export declare class GetContainerServiceDeploymentsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getContainerServiceDeploymentsResult?: shared.GetContainerServiceDeploymentsResult;
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
