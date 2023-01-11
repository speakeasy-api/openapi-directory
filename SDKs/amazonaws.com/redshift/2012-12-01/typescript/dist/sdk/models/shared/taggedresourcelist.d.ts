import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * A tag and its associated resource.
**/
export declare class TaggedResourceList extends SpeakeasyBase {
    resourceName?: string;
    resourceType?: string;
    tag?: Tag;
}
