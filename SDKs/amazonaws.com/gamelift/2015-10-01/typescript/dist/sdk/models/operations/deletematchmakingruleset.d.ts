import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMatchmakingRuleSetXAmzTargetEnum {
    GameLiftDeleteMatchmakingRuleSet = "GameLift.DeleteMatchmakingRuleSet"
}
export declare class DeleteMatchmakingRuleSetRequest extends SpeakeasyBase {
    deleteMatchmakingRuleSetInput: shared.DeleteMatchmakingRuleSetInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMatchmakingRuleSetXAmzTargetEnum;
}
export declare class DeleteMatchmakingRuleSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteMatchmakingRuleSetOutput?: Record<string, any>;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
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
