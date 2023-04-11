import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateWorkflowRequestBody extends SpeakeasyBase {
    /**
     * The configuration ID of the application configured in Application Discovery Service.
     */
    applicationConfigurationId: string;
    /**
     * The description of the migration workflow.
     */
    description?: string;
    /**
     * The input parameters required to create a migration workflow.
     */
    inputParameters: Record<string, shared.StepInput>;
    /**
     * The name of the migration workflow.
     */
    name: string;
    /**
     * The servers on which a step will be run.
     */
    stepTargets?: string[];
    /**
     * The tags to add on a migration workflow.
     */
    tags?: Record<string, string>;
    /**
     * The ID of the template.
     */
    templateId: string;
}
export declare class CreateWorkflowRequest extends SpeakeasyBase {
    requestBody: CreateWorkflowRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWorkflowResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createMigrationWorkflowResponse?: shared.CreateMigrationWorkflowResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
