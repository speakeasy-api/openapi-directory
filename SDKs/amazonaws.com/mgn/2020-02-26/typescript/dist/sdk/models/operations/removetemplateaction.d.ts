import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveTemplateActionRequestBody extends SpeakeasyBase {
    /**
     * Template post migration custom action ID to remove.
     */
    actionID: string;
    /**
     * Launch configuration template ID of the post migration custom action to remove.
     */
    launchConfigurationTemplateID: string;
}
export declare class RemoveTemplateActionRequest extends SpeakeasyBase {
    requestBody: RemoveTemplateActionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RemoveTemplateActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    removeTemplateActionResponse?: Record<string, any>;
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
