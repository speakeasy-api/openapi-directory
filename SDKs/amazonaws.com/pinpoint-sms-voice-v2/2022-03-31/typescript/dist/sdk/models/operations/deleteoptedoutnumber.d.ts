import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteOptedOutNumberXAmzTargetEnum {
    PinpointSMSVoiceV2DeleteOptedOutNumber = "PinpointSMSVoiceV2.DeleteOptedOutNumber"
}
export declare class DeleteOptedOutNumberRequest extends SpeakeasyBase {
    deleteOptedOutNumberRequest: shared.DeleteOptedOutNumberRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteOptedOutNumberXAmzTargetEnum;
}
export declare class DeleteOptedOutNumberResponse extends SpeakeasyBase {
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
     * Success
     */
    deleteOptedOutNumberResult?: shared.DeleteOptedOutNumberResult;
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
