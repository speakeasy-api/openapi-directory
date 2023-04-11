import { SpeakeasyBase } from "../../../internal/utils";
import { RelatedItemContent } from "./relateditemcontent";
import { RelatedItemTypeEnum } from "./relateditemtypeenum";
/**
 * A list of items that represent RelatedItems.
 */
export declare class SearchRelatedItemsResponseItem extends SpeakeasyBase {
    associationTime: Date;
    content: RelatedItemContent;
    relatedItemId: string;
    tags?: Record<string, string>;
    type: RelatedItemTypeEnum;
}
