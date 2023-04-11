import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class UpdateTagsForResourceMessage extends SpeakeasyBase {
    resourceArn: string;
    tagsToAdd?: Tag[];
    tagsToRemove?: string[];
}
