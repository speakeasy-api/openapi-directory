import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFleetPortSettingsXAmzTargetEnum {
    GameLiftUpdateFleetPortSettings = "GameLift.UpdateFleetPortSettings"
}
export declare class UpdateFleetPortSettingsRequest extends SpeakeasyBase {
    updateFleetPortSettingsInput: shared.UpdateFleetPortSettingsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFleetPortSettingsXAmzTargetEnum;
}
export declare class UpdateFleetPortSettingsResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidFleetStatusException
     */
    invalidFleetStatusException?: any;
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
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateFleetPortSettingsOutput?: shared.UpdateFleetPortSettingsOutput;
}
