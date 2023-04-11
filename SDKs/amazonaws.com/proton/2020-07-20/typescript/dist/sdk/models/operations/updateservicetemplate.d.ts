import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateServiceTemplateXAmzTargetEnum {
    AwsProton20200720UpdateServiceTemplate = "AwsProton20200720.UpdateServiceTemplate"
}
export declare class UpdateServiceTemplateRequest extends SpeakeasyBase {
    updateServiceTemplateInput: shared.UpdateServiceTemplateInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceTemplateXAmzTargetEnum;
}
export declare class UpdateServiceTemplateResponse extends SpeakeasyBase {
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
    updateServiceTemplateOutput?: shared.UpdateServiceTemplateOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
