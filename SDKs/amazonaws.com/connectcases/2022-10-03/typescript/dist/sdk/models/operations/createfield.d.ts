import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines the data type, some system constraints, and default display of the field.
 */
export declare enum CreateFieldRequestBodyTypeEnum {
    Text = "Text",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    SingleSelect = "SingleSelect"
}
export declare class CreateFieldRequestBody extends SpeakeasyBase {
    /**
     * The description of the field.
     */
    description?: string;
    /**
     * The name of the field.
     */
    name: string;
    /**
     * Defines the data type, some system constraints, and default display of the field.
     */
    type: CreateFieldRequestBodyTypeEnum;
}
export declare class CreateFieldRequest extends SpeakeasyBase {
    requestBody: CreateFieldRequestBody;
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
export declare class CreateFieldResponse extends SpeakeasyBase {
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
    createFieldResponse?: shared.CreateFieldResponse;
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
