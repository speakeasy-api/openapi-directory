import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEnvironmentTemplateXAmzTargetEnum {
    AwsProton20200720DeleteEnvironmentTemplate = "AwsProton20200720.DeleteEnvironmentTemplate"
}
export declare class DeleteEnvironmentTemplateRequest extends SpeakeasyBase {
    deleteEnvironmentTemplateInput: shared.DeleteEnvironmentTemplateInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEnvironmentTemplateXAmzTargetEnum;
}
export declare class DeleteEnvironmentTemplateResponse extends SpeakeasyBase {
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
    deleteEnvironmentTemplateOutput?: shared.DeleteEnvironmentTemplateOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
     * ValidationException
     */
    validationException?: any;
}
