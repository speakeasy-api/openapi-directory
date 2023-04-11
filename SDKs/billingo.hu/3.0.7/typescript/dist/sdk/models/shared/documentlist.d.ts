import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * A object with a data property that contains an array of up to limit documents. Each entry in the array is a separate document object. If no more documents are available, the resulting array will be empty.
 */
export declare class DocumentList extends SpeakeasyBase {
    currentPage?: number;
    data?: Document[];
    lastPage?: number;
    nextPageUrl?: string;
    perPage?: number;
    prevPageUrl?: string;
    total?: number;
}
