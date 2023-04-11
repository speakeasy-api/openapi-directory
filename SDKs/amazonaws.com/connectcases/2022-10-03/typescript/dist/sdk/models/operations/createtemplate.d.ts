import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Object to store configuration of layouts associated to the template.
 */
export declare class CreateTemplateRequestBodyLayoutConfiguration extends SpeakeasyBase {
    defaultLayout?: string;
}
/**
 * The status of the template.
 */
export declare enum CreateTemplateRequestBodyStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}
export declare class CreateTemplateRequestBody extends SpeakeasyBase {
    /**
     * A brief description of the template.
     */
    description?: string;
    /**
     * Object to store configuration of layouts associated to the template.
     */
    layoutConfiguration?: CreateTemplateRequestBodyLayoutConfiguration;
    /**
     * A name for the template. It must be unique per domain.
     */
    name: string;
    /**
     * A list of fields that must contain a value for a case to be successfully created with this template.
     */
    requiredFields?: shared.RequiredField[];
    /**
     * The status of the template.
     */
    status?: CreateTemplateRequestBodyStatusEnum;
}
export declare class CreateTemplateRequest extends SpeakeasyBase {
    requestBody: CreateTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the Cases domain.
     */
    domainId: string;
}
export declare class CreateTemplateResponse extends SpeakeasyBase {
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
    createTemplateResponse?: shared.CreateTemplateResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
