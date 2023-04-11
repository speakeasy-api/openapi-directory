import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEnvironmentTemplateXAmzTargetEnum {
    AwsProton20200720CreateEnvironmentTemplate = "AwsProton20200720.CreateEnvironmentTemplate"
}
export declare class CreateEnvironmentTemplateRequest extends SpeakeasyBase {
    createEnvironmentTemplateInput: shared.CreateEnvironmentTemplateInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEnvironmentTemplateXAmzTargetEnum;
}
export declare class CreateEnvironmentTemplateResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createEnvironmentTemplateOutput?: shared.CreateEnvironmentTemplateOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
