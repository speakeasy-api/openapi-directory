import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Object to store configuration of layouts associated to the template.
 */
export declare class UpdateTemplateRequestBodyLayoutConfiguration extends SpeakeasyBase {
    defaultLayout?: string;
}
/**
 * The status of the template.
 */
export declare enum UpdateTemplateRequestBodyStatusEnum {
    Active = "Active",
    Inactive = "Inactive"
}
export declare class UpdateTemplateRequestBody extends SpeakeasyBase {
    /**
     * A brief description of the template.
     */
    description?: string;
    /**
     * Object to store configuration of layouts associated to the template.
     */
    layoutConfiguration?: UpdateTemplateRequestBodyLayoutConfiguration;
    /**
     * The name of the template. It must be unique per domain.
     */
    name?: string;
    /**
     * A list of fields that must contain a value for a case to be successfully created with this template.
     */
    requiredFields?: shared.RequiredField[];
    /**
     * The status of the template.
     */
    status?: UpdateTemplateRequestBodyStatusEnum;
}
export declare class UpdateTemplateRequest extends SpeakeasyBase {
    requestBody: UpdateTemplateRequestBody;
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
    /**
     * A unique identifier for the template.
     */
    templateId: string;
}
export declare class UpdateTemplateResponse extends SpeakeasyBase {
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
     * Success
     */
    updateTemplateResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
