import { SpeakeasyBase } from "../../../internal/utils";
import { Store } from "./store";
import { StoreListLinks } from "./storelistlinks";
/**
 * Store list
 */
export declare class StoreList extends SpeakeasyBase {
    /**
     * The action links you can do globally on stores
     */
    links: StoreListLinks;
    stores: Store[];
}
