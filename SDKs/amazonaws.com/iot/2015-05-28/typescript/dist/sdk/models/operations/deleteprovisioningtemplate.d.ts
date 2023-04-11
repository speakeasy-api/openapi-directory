import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteProvisioningTemplateRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the fleet provision template to delete.
     */
    templateName: string;
}
export declare class DeleteProvisioningTemplateResponse extends SpeakeasyBase {
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
    deleteProvisioningTemplateResponse?: Record<string, any>;
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
