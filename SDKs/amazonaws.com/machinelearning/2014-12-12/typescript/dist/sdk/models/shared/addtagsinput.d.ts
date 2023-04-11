import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TaggableResourceTypeEnum } from "./taggableresourcetypeenum";
export declare class AddTagsInput extends SpeakeasyBase {
    resourceId: string;
    resourceType: TaggableResourceTypeEnum;
    tags: Tag[];
}
