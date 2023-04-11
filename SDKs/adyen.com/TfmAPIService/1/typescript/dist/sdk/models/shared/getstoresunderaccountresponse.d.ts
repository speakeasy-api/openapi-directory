import { SpeakeasyBase } from "../../../internal/utils";
import { Store } from "./store";
/**
 * OK - the request has succeeded.
 */
export declare class GetStoresUnderAccountResponse extends SpeakeasyBase {
    /**
     * Array that returns a list of all stores for the specified merchant account, or for all merchant accounts under the company account.
     */
    stores?: Store[];
}
