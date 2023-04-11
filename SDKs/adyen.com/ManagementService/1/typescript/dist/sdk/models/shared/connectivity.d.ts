import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates the status of the SIM card in the payment terminal. Can be updated and received only at terminal level, and only for models that support cellular connectivity.
 *
 * @remarks
 *
 * Possible values:
 * * **ACTIVATED**: the SIM card is activated. Cellular connectivity may still need to be enabled on the terminal itself, in the **Network** settings.
 * * **INVENTORY**: the SIM card is not activated. The terminal can't use cellular connectivity.
 */
export declare enum ConnectivitySimcardStatusEnum {
    Activated = "ACTIVATED",
    Inventory = "INVENTORY"
}
export declare class Connectivity extends SpeakeasyBase {
    /**
     * Indicates the status of the SIM card in the payment terminal. Can be updated and received only at terminal level, and only for models that support cellular connectivity.
     *
     * @remarks
     *
     * Possible values:
     * * **ACTIVATED**: the SIM card is activated. Cellular connectivity may still need to be enabled on the terminal itself, in the **Network** settings.
     * * **INVENTORY**: the SIM card is not activated. The terminal can't use cellular connectivity.
     */
    simcardStatus?: ConnectivitySimcardStatusEnum;
}
