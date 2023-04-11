import { SpeakeasyBase } from "../../../internal/utils";
import { PayoutSettings } from "./payoutsettings";
/**
 * OK - the request has succeeded.
 */
export declare class PayoutSettingsResponse extends SpeakeasyBase {
    /**
     * The list of payout accounts.
     */
    data?: PayoutSettings[];
}
