import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveSourceServerActionRequestBody extends SpeakeasyBase {
    /**
     * Source server post migration custom action ID to remove.
     */
    actionID: string;
    /**
     * Source server ID of the post migration custom action to remove.
     */
    sourceServerID: string;
}
export declare class RemoveSourceServerActionRequest extends SpeakeasyBase {
    requestBody: RemoveSourceServerActionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveSourceServerActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    removeSourceServerActionResponse?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
