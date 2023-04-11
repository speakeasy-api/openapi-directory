import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEnvironmentTemplateVersionXAmzTargetEnum {
    AwsProton20200720UpdateEnvironmentTemplateVersion = "AwsProton20200720.UpdateEnvironmentTemplateVersion"
}
export declare class UpdateEnvironmentTemplateVersionRequest extends SpeakeasyBase {
    updateEnvironmentTemplateVersionInput: shared.UpdateEnvironmentTemplateVersionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnvironmentTemplateVersionXAmzTargetEnum;
}
export declare class UpdateEnvironmentTemplateVersionResponse extends SpeakeasyBase {
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
    updateEnvironmentTemplateVersionOutput?: shared.UpdateEnvironmentTemplateVersionOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
