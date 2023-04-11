import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMatchmakingConfigurationXAmzTargetEnum {
    GameLiftUpdateMatchmakingConfiguration = "GameLift.UpdateMatchmakingConfiguration"
}
export declare class UpdateMatchmakingConfigurationRequest extends SpeakeasyBase {
    updateMatchmakingConfigurationInput: shared.UpdateMatchmakingConfigurationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMatchmakingConfigurationXAmzTargetEnum;
}
export declare class UpdateMatchmakingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
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
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
    /**
     * Success
     */
    updateMatchmakingConfigurationOutput?: shared.UpdateMatchmakingConfigurationOutput;
}
