import { SpeakeasyBase } from "../../../internal/utils";
import { NameLocation } from "./namelocation";
export declare class MerchantData extends SpeakeasyBase {
    /**
     * The merchant category code.
     */
    mcc?: string;
    /**
     * The merchant identifier.
     */
    merchantId?: string;
    nameLocation?: NameLocation;
    /**
     * The merchant postal code.
     */
    postalCode?: string;
}
