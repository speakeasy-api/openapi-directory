import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteBuildXAmzTargetEnum {
    GameLiftDeleteBuild = "GameLift.DeleteBuild"
}
export declare class DeleteBuildRequest extends SpeakeasyBase {
    deleteBuildInput: shared.DeleteBuildInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBuildXAmzTargetEnum;
}
export declare class DeleteBuildResponse extends SpeakeasyBase {
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
     * TaggingFailedException
     */
    taggingFailedException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
