import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteVoiceMessageSpendLimitOverrideXAmzTargetEnum {
    PinpointSMSVoiceV2DeleteVoiceMessageSpendLimitOverride = "PinpointSMSVoiceV2.DeleteVoiceMessageSpendLimitOverride"
}
export declare class DeleteVoiceMessageSpendLimitOverrideRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVoiceMessageSpendLimitOverrideXAmzTargetEnum;
}
export declare class DeleteVoiceMessageSpendLimitOverrideResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteVoiceMessageSpendLimitOverrideResult?: shared.DeleteVoiceMessageSpendLimitOverrideResult;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
