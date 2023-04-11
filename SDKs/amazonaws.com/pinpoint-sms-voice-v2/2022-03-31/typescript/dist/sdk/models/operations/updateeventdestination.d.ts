import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEventDestinationXAmzTargetEnum {
    PinpointSMSVoiceV2UpdateEventDestination = "PinpointSMSVoiceV2.UpdateEventDestination"
}
export declare class UpdateEventDestinationRequest extends SpeakeasyBase {
    updateEventDestinationRequest: shared.UpdateEventDestinationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEventDestinationXAmzTargetEnum;
}
export declare class UpdateEventDestinationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateEventDestinationResult?: shared.UpdateEventDestinationResult;
    /**
     * ValidationException
     */
    validationException?: any;
}
