import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allowed authentication methods: Magswipe, Manual Entry.
 */
export declare enum PayAtTableAuthenticationMethodEnum {
    Magswipe = "MAGSWIPE",
    Mke = "MKE"
}
export declare class PayAtTable extends SpeakeasyBase {
    /**
     * Allowed authentication methods: Magswipe, Manual Entry.
     */
    authenticationMethod?: PayAtTableAuthenticationMethodEnum;
    /**
     * Enable Pay at table.
     */
    enablePayAtTable?: boolean;
}
