import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEventDestinationXAmzTargetEnum {
    PinpointSMSVoiceV2DeleteEventDestination = "PinpointSMSVoiceV2.DeleteEventDestination"
}
export declare class DeleteEventDestinationRequest extends SpeakeasyBase {
    deleteEventDestinationRequest: shared.DeleteEventDestinationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEventDestinationXAmzTargetEnum;
}
export declare class DeleteEventDestinationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteEventDestinationResult?: shared.DeleteEventDestinationResult;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
