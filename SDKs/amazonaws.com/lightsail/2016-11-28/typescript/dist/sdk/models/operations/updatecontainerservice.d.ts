import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateContainerServiceXAmzTargetEnum {
    Lightsail20161128UpdateContainerService = "Lightsail_20161128.UpdateContainerService"
}
export declare class UpdateContainerServiceRequest extends SpeakeasyBase {
    updateContainerServiceRequest: shared.UpdateContainerServiceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContainerServiceXAmzTargetEnum;
}
export declare class UpdateContainerServiceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
    /**
     * Success
     */
    updateContainerServiceResult?: shared.UpdateContainerServiceResult;
}
