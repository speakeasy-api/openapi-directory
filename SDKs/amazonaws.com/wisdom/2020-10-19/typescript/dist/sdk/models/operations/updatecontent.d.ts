import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateContentRequestBody extends SpeakeasyBase {
    /**
     * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.
     */
    metadata?: Record<string, string>;
    /**
     * The URI for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content. To remove an existing <code>overrideLinkOurUri</code>, exclude this argument and set <code>removeOverrideLinkOutUri</code> to true.
     */
    overrideLinkOutUri?: string;
    /**
     * Unset the existing <code>overrideLinkOutUri</code> if it exists.
     */
    removeOverrideLinkOutUri?: boolean;
    /**
     * The <code>revisionId</code> of the content resource to update, taken from an earlier call to <code>GetContent</code>, <code>GetContentSummary</code>, <code>SearchContent</code>, or <code>ListContents</code>. If included, this argument acts as an optimistic lock to ensure content was not modified since it was last read. If it has been modified, this API throws a <code>PreconditionFailedException</code>.
     */
    revisionId?: string;
    /**
     * The title of the content.
     */
    title?: string;
    /**
     * A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.
     */
    uploadId?: string;
}
export declare class UpdateContentRequest extends SpeakeasyBase {
    requestBody: UpdateContentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    contentId: string;
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN
     */
    knowledgeBaseId: string;
}
export declare class UpdateContentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * PreconditionFailedException
     */
    preconditionFailedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateContentResponse?: shared.UpdateContentResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
