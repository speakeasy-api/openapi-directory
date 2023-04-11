import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteScriptXAmzTargetEnum {
    GameLiftDeleteScript = "GameLift.DeleteScript"
}
export declare class DeleteScriptRequest extends SpeakeasyBase {
    deleteScriptInput: shared.DeleteScriptInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteScriptXAmzTargetEnum;
}
export declare class DeleteScriptResponse extends SpeakeasyBase {
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
