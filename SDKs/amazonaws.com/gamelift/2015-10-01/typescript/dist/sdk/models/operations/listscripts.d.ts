import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListScriptsXAmzTargetEnum {
    GameLiftListScripts = "GameLift.ListScripts"
}
export declare class ListScriptsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listScriptsInput: shared.ListScriptsInput;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListScriptsXAmzTargetEnum;
}
export declare class ListScriptsResponse extends SpeakeasyBase {
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
     * Success
     */
    listScriptsOutput?: shared.ListScriptsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
