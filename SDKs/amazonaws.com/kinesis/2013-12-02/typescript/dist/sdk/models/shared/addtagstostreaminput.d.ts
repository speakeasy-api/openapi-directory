import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for <code>AddTagsToStream</code>.
 */
export declare class AddTagsToStreamInput extends SpeakeasyBase {
    streamARN?: string;
    streamName?: string;
    tags: Record<string, string>;
}
