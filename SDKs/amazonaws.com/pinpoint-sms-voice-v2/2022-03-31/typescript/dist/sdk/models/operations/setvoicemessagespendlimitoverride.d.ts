import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetVoiceMessageSpendLimitOverrideXAmzTargetEnum {
    PinpointSMSVoiceV2SetVoiceMessageSpendLimitOverride = "PinpointSMSVoiceV2.SetVoiceMessageSpendLimitOverride"
}
export declare class SetVoiceMessageSpendLimitOverrideRequest extends SpeakeasyBase {
    setVoiceMessageSpendLimitOverrideRequest: shared.SetVoiceMessageSpendLimitOverrideRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetVoiceMessageSpendLimitOverrideXAmzTargetEnum;
}
export declare class SetVoiceMessageSpendLimitOverrideResponse extends SpeakeasyBase {
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
    setVoiceMessageSpendLimitOverrideResult?: shared.SetVoiceMessageSpendLimitOverrideResult;
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
