import { SpeakeasyBase } from "../../../internal/utils";
import { ItemList } from "./itemlist";
/**
 * Success
 */
export declare class SelectResult extends SpeakeasyBase {
    items?: ItemList[];
    nextToken?: string;
}
