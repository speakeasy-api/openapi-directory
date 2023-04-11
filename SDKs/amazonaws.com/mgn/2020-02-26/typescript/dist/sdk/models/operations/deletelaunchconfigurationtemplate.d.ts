import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteLaunchConfigurationTemplateRequestBody extends SpeakeasyBase {
    /**
     * ID of resource to be deleted.
     */
    launchConfigurationTemplateID: string;
}
export declare class DeleteLaunchConfigurationTemplateRequest extends SpeakeasyBase {
    requestBody: DeleteLaunchConfigurationTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteLaunchConfigurationTemplateResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteLaunchConfigurationTemplateResponse?: Record<string, any>;
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
}
