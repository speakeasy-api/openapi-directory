import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
/**
 * Success
 */
export declare class ListItemsResponse extends SpeakeasyBase {
    items?: Item[];
    nextToken?: string;
}
