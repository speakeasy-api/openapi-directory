import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>RemoveTagsFromResource</code> operation.
 */
export declare class RemoveTagsFromResourceMessage extends SpeakeasyBase {
    resourceName: string;
    tagKeys: string[];
}
