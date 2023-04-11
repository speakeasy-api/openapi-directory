import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMatchmakingConfigurationXAmzTargetEnum {
    GameLiftDeleteMatchmakingConfiguration = "GameLift.DeleteMatchmakingConfiguration"
}
export declare class DeleteMatchmakingConfigurationRequest extends SpeakeasyBase {
    deleteMatchmakingConfigurationInput: shared.DeleteMatchmakingConfigurationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMatchmakingConfigurationXAmzTargetEnum;
}
export declare class DeleteMatchmakingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteMatchmakingConfigurationOutput?: Record<string, any>;
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
