import { SpeakeasyBase } from "../../../internal/utils";
import { CustomKeyStoresListEntry } from "./customkeystoreslistentry";
/**
 * Success
 */
export declare class DescribeCustomKeyStoresResponse extends SpeakeasyBase {
    customKeyStores?: CustomKeyStoresListEntry[];
    nextMarker?: string;
    truncated?: boolean;
}
