import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Object to store union of different versions of layout content.
 */
export declare class CreateLayoutRequestBodyContent extends SpeakeasyBase {
    basic?: shared.BasicLayout;
}
export declare class CreateLayoutRequestBody extends SpeakeasyBase {
    /**
     * Object to store union of different versions of layout content.
     */
    content: CreateLayoutRequestBodyContent;
    /**
     * The name of the layout. It must be unique for the Cases domain.
     */
    name: string;
}
export declare class CreateLayoutRequest extends SpeakeasyBase {
    requestBody: CreateLayoutRequestBody;
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
export declare class CreateLayoutResponse extends SpeakeasyBase {
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
    createLayoutResponse?: shared.CreateLayoutResponse;
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
