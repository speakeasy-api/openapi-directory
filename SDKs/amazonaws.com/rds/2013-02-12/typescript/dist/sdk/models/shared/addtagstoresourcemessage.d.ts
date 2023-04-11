import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class AddTagsToResourceMessage extends SpeakeasyBase {
    resourceName: string;
    tags: TagList[];
}
