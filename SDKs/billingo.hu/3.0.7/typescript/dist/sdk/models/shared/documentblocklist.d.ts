import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentBlock } from "./documentblock";
/**
 * A object with a data property that contains an array of up to limit document blocks. Each entry in the array is a separate document block object. If no more document block are available, the resulting array will be empty.
**/
export declare class DocumentBlockList extends SpeakeasyBase {
    currentPage?: number;
    data?: DocumentBlock[];
    lastPage?: number;
    nextPageUrl?: string;
    perPage?: number;
    prevPageUrl?: string;
    total?: number;
}
