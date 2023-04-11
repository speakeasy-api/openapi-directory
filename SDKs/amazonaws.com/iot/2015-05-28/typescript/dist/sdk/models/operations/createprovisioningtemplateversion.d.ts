import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProvisioningTemplateVersionRequestBody extends SpeakeasyBase {
    /**
     * The JSON formatted contents of the provisioning template.
     */
    templateBody: string;
}
export declare class CreateProvisioningTemplateVersionRequest extends SpeakeasyBase {
    requestBody: CreateProvisioningTemplateVersionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Sets a fleet provision template version as the default version.
     */
    setAsDefault?: boolean;
    /**
     * The name of the provisioning template.
     */
    templateName: string;
}
export declare class CreateProvisioningTemplateVersionResponse extends SpeakeasyBase {
    /**
     * ConflictingResourceUpdateException
     */
    conflictingResourceUpdateException?: any;
    contentType: string;
    /**
     * Success
     */
    createProvisioningTemplateVersionResponse?: shared.CreateProvisioningTemplateVersionResponse;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * VersionsLimitExceededException
     */
    versionsLimitExceededException?: any;
}
