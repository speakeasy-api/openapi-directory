import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateBuildXAmzTargetEnum {
    GameLiftUpdateBuild = "GameLift.UpdateBuild"
}
export declare class UpdateBuildRequest extends SpeakeasyBase {
    updateBuildInput: shared.UpdateBuildInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateBuildXAmzTargetEnum;
}
export declare class UpdateBuildResponse extends SpeakeasyBase {
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
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateBuildOutput?: shared.UpdateBuildOutput;
}
