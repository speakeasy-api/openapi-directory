import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFlywheelXAmzTargetEnum {
    Comprehend20171127DeleteFlywheel = "Comprehend_20171127.DeleteFlywheel"
}
export declare class DeleteFlywheelRequest extends SpeakeasyBase {
    deleteFlywheelRequest: shared.DeleteFlywheelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFlywheelXAmzTargetEnum;
}
export declare class DeleteFlywheelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteFlywheelResponse?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
