import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Object to store union of different versions of layout content.
 */
export declare class UpdateLayoutRequestBodyContent extends SpeakeasyBase {
    basic?: shared.BasicLayout;
}
export declare class UpdateLayoutRequestBody extends SpeakeasyBase {
    /**
     * Object to store union of different versions of layout content.
     */
    content?: UpdateLayoutRequestBodyContent;
    /**
     * The name of the layout. It must be unique per domain.
     */
    name?: string;
}
export declare class UpdateLayoutRequest extends SpeakeasyBase {
    requestBody: UpdateLayoutRequestBody;
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
     * The unique identifier of the layout.
     */
    layoutId: string;
}
export declare class UpdateLayoutResponse extends SpeakeasyBase {
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
     * Success
     */
    updateLayoutResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
