import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutOptedOutNumberXAmzTargetEnum {
    PinpointSMSVoiceV2PutOptedOutNumber = "PinpointSMSVoiceV2.PutOptedOutNumber"
}
export declare class PutOptedOutNumberRequest extends SpeakeasyBase {
    putOptedOutNumberRequest: shared.PutOptedOutNumberRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutOptedOutNumberXAmzTargetEnum;
}
export declare class PutOptedOutNumberResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putOptedOutNumberResult?: shared.PutOptedOutNumberResult;
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
