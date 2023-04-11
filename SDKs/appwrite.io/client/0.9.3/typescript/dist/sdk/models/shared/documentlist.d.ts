import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Documents List
 */
export declare class DocumentList extends SpeakeasyBase {
    /**
     * List of documents.
     */
    documents: Record<string, any>[];
    /**
     * Total sum of items in the list.
     */
    sum: number;
}
