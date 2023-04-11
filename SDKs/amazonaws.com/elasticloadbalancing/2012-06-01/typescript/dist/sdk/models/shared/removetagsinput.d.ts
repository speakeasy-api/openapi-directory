import { SpeakeasyBase } from "../../../internal/utils";
import { TagKeyOnly } from "./tagkeyonly";
/**
 * Contains the parameters for RemoveTags.
 */
export declare class RemoveTagsInput extends SpeakeasyBase {
    loadBalancerNames: string[];
    tags: TagKeyOnly[];
}
