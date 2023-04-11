import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteProvisioningTemplateVersionRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the provisioning template version to delete.
     */
    templateName: string;
    /**
     * The provisioning template version ID to delete.
     */
    versionId: number;
}
export declare class DeleteProvisioningTemplateVersionResponse extends SpeakeasyBase {
    /**
     * ConflictingResourceUpdateException
     */
    conflictingResourceUpdateException?: any;
    contentType: string;
    /**
     * DeleteConflictException
     */
    deleteConflictException?: any;
    /**
     * Success
     */
    deleteProvisioningTemplateVersionResponse?: Record<string, any>;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
