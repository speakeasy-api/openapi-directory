import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the tag keys to deregister for the current Region. You can either specify individual tag keys or deregister all tag keys in the current Region. You must specify either <code>IncludeAllTagsOfInstance</code> or <code>InstanceTagKeys</code> in the request
 */
export declare class DeregisterInstanceTagAttributeRequest extends SpeakeasyBase {
    includeAllTagsOfInstance?: boolean;
    instanceTagKeys?: string[];
}
