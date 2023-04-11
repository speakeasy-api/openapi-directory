import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetTextMessageSpendLimitOverrideXAmzTargetEnum {
    PinpointSMSVoiceV2SetTextMessageSpendLimitOverride = "PinpointSMSVoiceV2.SetTextMessageSpendLimitOverride"
}
export declare class SetTextMessageSpendLimitOverrideRequest extends SpeakeasyBase {
    setTextMessageSpendLimitOverrideRequest: shared.SetTextMessageSpendLimitOverrideRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetTextMessageSpendLimitOverrideXAmzTargetEnum;
}
export declare class SetTextMessageSpendLimitOverrideResponse extends SpeakeasyBase {
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
    setTextMessageSpendLimitOverrideResult?: shared.SetTextMessageSpendLimitOverrideResult;
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
