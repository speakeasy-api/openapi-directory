import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateKnowledgeBaseTemplateUriRequestBody extends SpeakeasyBase {
    /**
     * The template URI to update.
     */
    templateUri: string;
}
export declare class UpdateKnowledgeBaseTemplateUriRequest extends SpeakeasyBase {
    requestBody: UpdateKnowledgeBaseTemplateUriRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: string;
}
export declare class UpdateKnowledgeBaseTemplateUriResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateKnowledgeBaseTemplateUriResponse?: shared.UpdateKnowledgeBaseTemplateUriResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
