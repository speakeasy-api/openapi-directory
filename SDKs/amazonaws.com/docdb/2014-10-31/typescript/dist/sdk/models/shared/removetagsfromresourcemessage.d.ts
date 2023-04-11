import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input to <a>RemoveTagsFromResource</a>.
 */
export declare class RemoveTagsFromResourceMessage extends SpeakeasyBase {
    resourceName: string;
    tagKeys: string[];
}
