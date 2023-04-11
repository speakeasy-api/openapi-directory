import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEnvironmentTemplateVersionXAmzTargetEnum {
    AwsProton20200720DeleteEnvironmentTemplateVersion = "AwsProton20200720.DeleteEnvironmentTemplateVersion"
}
export declare class DeleteEnvironmentTemplateVersionRequest extends SpeakeasyBase {
    deleteEnvironmentTemplateVersionInput: shared.DeleteEnvironmentTemplateVersionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEnvironmentTemplateVersionXAmzTargetEnum;
}
export declare class DeleteEnvironmentTemplateVersionResponse extends SpeakeasyBase {
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
    deleteEnvironmentTemplateVersionOutput?: shared.DeleteEnvironmentTemplateVersionOutput;
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
