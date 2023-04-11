import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TaggableResourceTypeEnum } from "./taggableresourcetypeenum";
/**
 * Amazon ML returns the following elements.
 */
export declare class DescribeTagsOutput extends SpeakeasyBase {
    resourceId?: string;
    resourceType?: TaggableResourceTypeEnum;
    tags?: Tag[];
}
