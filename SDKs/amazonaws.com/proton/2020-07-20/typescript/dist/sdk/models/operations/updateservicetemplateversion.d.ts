import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateServiceTemplateVersionXAmzTargetEnum {
    AwsProton20200720UpdateServiceTemplateVersion = "AwsProton20200720.UpdateServiceTemplateVersion"
}
export declare class UpdateServiceTemplateVersionRequest extends SpeakeasyBase {
    updateServiceTemplateVersionInput: shared.UpdateServiceTemplateVersionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceTemplateVersionXAmzTargetEnum;
}
export declare class UpdateServiceTemplateVersionResponse extends SpeakeasyBase {
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
    updateServiceTemplateVersionOutput?: shared.UpdateServiceTemplateVersionOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
