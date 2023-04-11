import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartFlywheelIterationXAmzTargetEnum {
    Comprehend20171127StartFlywheelIteration = "Comprehend_20171127.StartFlywheelIteration"
}
export declare class StartFlywheelIterationRequest extends SpeakeasyBase {
    startFlywheelIterationRequest: shared.StartFlywheelIterationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartFlywheelIterationXAmzTargetEnum;
}
export declare class StartFlywheelIterationResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    startFlywheelIterationResponse?: shared.StartFlywheelIterationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
