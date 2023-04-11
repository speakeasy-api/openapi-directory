import { SpeakeasyBase } from "../../../internal/utils";
import { ItemGroup } from "./itemgroup";
/**
 * The type that defines the array for the items returned in the <b>Item Group</b> feed file.
 */
export declare class ItemGroupResponse extends SpeakeasyBase {
    /**
     * The container for the array of items groups returned by the <b> getItemGroupFeed</b> method. The data in the file is tab separated and the first row is the header, which labels the columns and indicates the order of the values for each item. The header labels match the fields that are described in the <a href="/api-docs/buy/feed/resources/item_group/methods/getItemGroupFeed#h3-response-fields">Response fields</a> section.
     */
    itemGroups?: ItemGroup[];
}
