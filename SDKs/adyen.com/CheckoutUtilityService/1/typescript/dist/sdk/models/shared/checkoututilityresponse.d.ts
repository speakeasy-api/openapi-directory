import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK - the request has succeeded.
 */
export declare class CheckoutUtilityResponse extends SpeakeasyBase {
    /**
     * The list of origin keys for all requested domains. For each list item, the key is the domain and the value is the origin key.
     */
    originKeys?: Record<string, string>;
}
