import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEnvironmentTemplateVersionXAmzTargetEnum {
    AwsProton20200720CreateEnvironmentTemplateVersion = "AwsProton20200720.CreateEnvironmentTemplateVersion"
}
export declare class CreateEnvironmentTemplateVersionRequest extends SpeakeasyBase {
    createEnvironmentTemplateVersionInput: shared.CreateEnvironmentTemplateVersionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEnvironmentTemplateVersionXAmzTargetEnum;
}
export declare class CreateEnvironmentTemplateVersionResponse extends SpeakeasyBase {
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
    createEnvironmentTemplateVersionOutput?: shared.CreateEnvironmentTemplateVersionOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
