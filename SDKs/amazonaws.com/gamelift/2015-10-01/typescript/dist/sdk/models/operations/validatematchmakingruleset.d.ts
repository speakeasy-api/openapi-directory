import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ValidateMatchmakingRuleSetXAmzTargetEnum {
    GameLiftValidateMatchmakingRuleSet = "GameLift.ValidateMatchmakingRuleSet"
}
export declare class ValidateMatchmakingRuleSetRequest extends SpeakeasyBase {
    validateMatchmakingRuleSetInput: shared.ValidateMatchmakingRuleSetInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ValidateMatchmakingRuleSetXAmzTargetEnum;
}
export declare class ValidateMatchmakingRuleSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
    /**
     * Success
     */
    validateMatchmakingRuleSetOutput?: shared.ValidateMatchmakingRuleSetOutput;
}
