import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Represents the content of a related item to be created.
 */
export declare class CreateRelatedItemRequestBodyContent extends SpeakeasyBase {
    comment?: shared.CommentContent;
    contact?: shared.Contact;
}
/**
 * The type of a related item.
 */
export declare enum CreateRelatedItemRequestBodyTypeEnum {
    Contact = "Contact",
    Comment = "Comment"
}
export declare class CreateRelatedItemRequestBody extends SpeakeasyBase {
    /**
     * Represents the content of a related item to be created.
     */
    content: CreateRelatedItemRequestBodyContent;
    /**
     * The type of a related item.
     */
    type: CreateRelatedItemRequestBodyTypeEnum;
}
export declare class CreateRelatedItemRequest extends SpeakeasyBase {
    requestBody: CreateRelatedItemRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A unique identifier of the case.
     */
    caseId: string;
    /**
     * The unique identifier of the Cases domain.
     */
    domainId: string;
}
export declare class CreateRelatedItemResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createRelatedItemResponse?: shared.CreateRelatedItemResponse;
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
