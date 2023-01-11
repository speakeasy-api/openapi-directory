import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateExperimentTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateExperimentTemplateRequestBody extends SpeakeasyBase {
    actions: Record<string, shared.CreateExperimentTemplateActionInput>;
    clientToken: string;
    description: string;
    roleArn: string;
    stopConditions: shared.CreateExperimentTemplateStopConditionInput[];
    tags?: Record<string, string>;
    targets?: Record<string, shared.CreateExperimentTemplateTargetInput>;
}
export declare class CreateExperimentTemplateRequest extends SpeakeasyBase {
    headers: CreateExperimentTemplateHeaders;
    request: CreateExperimentTemplateRequestBody;
}
export declare class CreateExperimentTemplateResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createExperimentTemplateResponse?: shared.CreateExperimentTemplateResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
