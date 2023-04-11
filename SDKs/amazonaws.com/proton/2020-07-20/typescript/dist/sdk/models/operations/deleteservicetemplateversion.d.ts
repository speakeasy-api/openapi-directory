import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteServiceTemplateVersionXAmzTargetEnum {
    AwsProton20200720DeleteServiceTemplateVersion = "AwsProton20200720.DeleteServiceTemplateVersion"
}
export declare class DeleteServiceTemplateVersionRequest extends SpeakeasyBase {
    deleteServiceTemplateVersionInput: shared.DeleteServiceTemplateVersionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceTemplateVersionXAmzTargetEnum;
}
export declare class DeleteServiceTemplateVersionResponse extends SpeakeasyBase {
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
    deleteServiceTemplateVersionOutput?: shared.DeleteServiceTemplateVersionOutput;
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
