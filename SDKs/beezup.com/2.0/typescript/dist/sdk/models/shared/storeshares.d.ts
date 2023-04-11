import { SpeakeasyBase } from "../../../internal/utils";
import { StoreShare } from "./storeshare";
import { StoreSharesLinks } from "./storeshareslinks";
/**
 * The sharing list of the store
 */
export declare class StoreShares extends SpeakeasyBase {
    links: StoreSharesLinks;
    shares: StoreShare[];
}
