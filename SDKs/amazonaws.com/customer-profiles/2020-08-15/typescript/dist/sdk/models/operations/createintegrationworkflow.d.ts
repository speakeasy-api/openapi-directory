import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configuration data for integration workflow.
 */
export declare class CreateIntegrationWorkflowRequestBodyIntegrationConfig extends SpeakeasyBase {
    appflowIntegration?: shared.AppflowIntegration;
}
/**
 * The type of workflow. The only supported value is APPFLOW_INTEGRATION.
 */
export declare enum CreateIntegrationWorkflowRequestBodyWorkflowTypeEnum {
    AppflowIntegration = "APPFLOW_INTEGRATION"
}
export declare class CreateIntegrationWorkflowRequestBody extends SpeakeasyBase {
    /**
     * Configuration data for integration workflow.
     */
    integrationConfig: CreateIntegrationWorkflowRequestBodyIntegrationConfig;
    /**
     * The name of the profile object type.
     */
    objectTypeName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role. Customer Profiles assumes this role to create resources on your behalf as part of workflow execution.
     */
    roleArn: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Record<string, string>;
    /**
     * The type of workflow. The only supported value is APPFLOW_INTEGRATION.
     */
    workflowType: CreateIntegrationWorkflowRequestBodyWorkflowTypeEnum;
}
export declare class CreateIntegrationWorkflowRequest extends SpeakeasyBase {
    /**
     * The unique name of the domain.
     */
    domainName: string;
    requestBody: CreateIntegrationWorkflowRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateIntegrationWorkflowResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createIntegrationWorkflowResponse?: shared.CreateIntegrationWorkflowResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
}
