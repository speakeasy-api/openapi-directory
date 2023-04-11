import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
 */
export declare class UpdateProvisioningTemplateRequestBodyPreProvisioningHook extends SpeakeasyBase {
    payloadVersion?: string;
    targetArn?: string;
}
export declare class UpdateProvisioningTemplateRequestBody extends SpeakeasyBase {
    /**
     * The ID of the default provisioning template version.
     */
    defaultVersionId?: number;
    /**
     * The description of the provisioning template.
     */
    description?: string;
    /**
     * True to enable the provisioning template, otherwise false.
     */
    enabled?: boolean;
    /**
     * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
     */
    preProvisioningHook?: UpdateProvisioningTemplateRequestBodyPreProvisioningHook;
    /**
     * The ARN of the role associated with the provisioning template. This IoT role grants permission to provision a device.
     */
    provisioningRoleArn?: string;
    /**
     * Removes pre-provisioning hook template.
     */
    removePreProvisioningHook?: boolean;
}
export declare class UpdateProvisioningTemplateRequest extends SpeakeasyBase {
    requestBody: UpdateProvisioningTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the provisioning template.
     */
    templateName: string;
}
export declare class UpdateProvisioningTemplateResponse extends SpeakeasyBase {
    /**
     * ConflictingResourceUpdateException
     */
    conflictingResourceUpdateException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateProvisioningTemplateResponse?: Record<string, any>;
}
