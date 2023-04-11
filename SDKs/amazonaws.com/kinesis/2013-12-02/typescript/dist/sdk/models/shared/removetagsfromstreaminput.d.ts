import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for <code>RemoveTagsFromStream</code>.
 */
export declare class RemoveTagsFromStreamInput extends SpeakeasyBase {
    streamARN?: string;
    streamName?: string;
    tagKeys: string[];
}
