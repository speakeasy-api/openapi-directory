import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionTicketComment } from "./collectionticketcomment";
/**
 * Get a Comment
 */
export declare class GetCommentResponse extends SpeakeasyBase {
    data: CollectionTicketComment;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
