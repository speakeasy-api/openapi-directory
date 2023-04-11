import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateRuntimeConfigurationXAmzTargetEnum {
    GameLiftUpdateRuntimeConfiguration = "GameLift.UpdateRuntimeConfiguration"
}
export declare class UpdateRuntimeConfigurationRequest extends SpeakeasyBase {
    updateRuntimeConfigurationInput: shared.UpdateRuntimeConfigurationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRuntimeConfigurationXAmzTargetEnum;
}
export declare class UpdateRuntimeConfigurationResponse extends SpeakeasyBase {
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
    updateRuntimeConfigurationOutput?: shared.UpdateRuntimeConfigurationOutput;
}
