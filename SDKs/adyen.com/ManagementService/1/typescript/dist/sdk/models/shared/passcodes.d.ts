import { SpeakeasyBase } from "../../../internal/utils";
export declare class Passcodes extends SpeakeasyBase {
    /**
     * The passcode for the Admin menu and the Settings menu.
     */
    adminMenuPin?: string;
    /**
     * The passcode for unreferenced refunds on standalone terminals.
     */
    refundPin?: string;
    /**
     * The passcode to unlock the terminal screen after a timeout.
     */
    screenLockPin?: string;
    /**
     * The passcode for the Transactions menu.
     */
    txMenuPin?: string;
}
