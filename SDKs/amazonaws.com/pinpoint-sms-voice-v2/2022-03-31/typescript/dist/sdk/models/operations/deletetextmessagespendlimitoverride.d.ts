import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTextMessageSpendLimitOverrideXAmzTargetEnum {
    PinpointSMSVoiceV2DeleteTextMessageSpendLimitOverride = "PinpointSMSVoiceV2.DeleteTextMessageSpendLimitOverride"
}
export declare class DeleteTextMessageSpendLimitOverrideRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTextMessageSpendLimitOverrideXAmzTargetEnum;
}
export declare class DeleteTextMessageSpendLimitOverrideResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteTextMessageSpendLimitOverrideResult?: shared.DeleteTextMessageSpendLimitOverrideResult;
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
