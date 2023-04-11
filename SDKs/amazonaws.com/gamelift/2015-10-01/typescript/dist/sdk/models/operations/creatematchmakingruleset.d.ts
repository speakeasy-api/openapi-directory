import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateMatchmakingRuleSetXAmzTargetEnum {
    GameLiftCreateMatchmakingRuleSet = "GameLift.CreateMatchmakingRuleSet"
}
export declare class CreateMatchmakingRuleSetRequest extends SpeakeasyBase {
    createMatchmakingRuleSetInput: shared.CreateMatchmakingRuleSetInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMatchmakingRuleSetXAmzTargetEnum;
}
export declare class CreateMatchmakingRuleSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createMatchmakingRuleSetOutput?: shared.CreateMatchmakingRuleSetOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TaggingFailedException
     */
    taggingFailedException?: any;
    /**
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
