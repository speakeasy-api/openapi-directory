import { SpeakeasyBase } from "../../../internal/utils";
import { VariantStoreItem } from "./variantstoreitem";
/**
 * Success
 */
export declare class ListVariantStoresResponse extends SpeakeasyBase {
    nextToken?: string;
    variantStores?: VariantStoreItem[];
}
