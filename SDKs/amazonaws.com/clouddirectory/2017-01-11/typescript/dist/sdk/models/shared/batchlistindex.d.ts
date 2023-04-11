import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectAttributeRange } from "./objectattributerange";
import { ObjectReference } from "./objectreference";
/**
 * Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.
 */
export declare class BatchListIndex extends SpeakeasyBase {
    indexReference: ObjectReference;
    maxResults?: number;
    nextToken?: string;
    rangesOnIndexedValues?: ObjectAttributeRange[];
}
