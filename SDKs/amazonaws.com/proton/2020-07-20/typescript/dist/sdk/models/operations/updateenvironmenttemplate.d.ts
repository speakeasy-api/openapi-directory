import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEnvironmentTemplateXAmzTargetEnum {
    AwsProton20200720UpdateEnvironmentTemplate = "AwsProton20200720.UpdateEnvironmentTemplate"
}
export declare class UpdateEnvironmentTemplateRequest extends SpeakeasyBase {
    updateEnvironmentTemplateInput: shared.UpdateEnvironmentTemplateInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnvironmentTemplateXAmzTargetEnum;
}
export declare class UpdateEnvironmentTemplateResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateEnvironmentTemplateOutput?: shared.UpdateEnvironmentTemplateOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
