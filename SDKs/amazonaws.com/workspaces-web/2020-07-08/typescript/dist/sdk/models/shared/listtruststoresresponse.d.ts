import { SpeakeasyBase } from "../../../internal/utils";
import { TrustStoreSummary } from "./truststoresummary";
/**
 * Success
 */
export declare class ListTrustStoresResponse extends SpeakeasyBase {
    nextToken?: string;
    trustStores?: TrustStoreSummary[];
}
