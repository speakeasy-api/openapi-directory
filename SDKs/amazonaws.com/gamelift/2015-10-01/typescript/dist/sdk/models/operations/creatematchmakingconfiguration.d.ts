import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateMatchmakingConfigurationXAmzTargetEnum {
    GameLiftCreateMatchmakingConfiguration = "GameLift.CreateMatchmakingConfiguration"
}
export declare class CreateMatchmakingConfigurationRequest extends SpeakeasyBase {
    createMatchmakingConfigurationInput: shared.CreateMatchmakingConfigurationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMatchmakingConfigurationXAmzTargetEnum;
}
export declare class CreateMatchmakingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createMatchmakingConfigurationOutput?: shared.CreateMatchmakingConfigurationOutput;
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
