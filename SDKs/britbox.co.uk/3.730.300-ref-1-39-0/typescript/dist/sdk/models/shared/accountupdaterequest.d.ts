import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * Updated account details.
 */
export declare class AccountUpdateRequest extends SpeakeasyBase {
    address?: Address;
    /**
     * The id of the payment instrument to use by default for account transactions.
     *
     * @remarks
     *
     * **DEPRECATED** The property `defaultPaymentMethodId` is now preferred.
     *
     */
    defaultPaymentInstrumentId?: string;
    /**
     * The id of the payment method to use by default for account transactions.
     */
    defaultPaymentMethodId?: string;
    /**
     * The first name of the account holder.
     */
    firstName?: string;
    /**
     * The last name of the account holder.
     */
    lastName?: string;
    /**
     * The classification rating defining the minimum rating level a user should be
     *
     * @remarks
     * forced to enter the account pin code for playback. Anything at this rating
     * level or above will require the pin for playback.
     *
     * e.g. AUOFLC-MA15+
     *
     * If you want to disable this guard pass an empty string or `null`.
     *
     */
    minRatingPlaybackGuard?: string;
    /**
     * The segments an account should be placed under
     */
    segments?: string[];
    /**
     * Whether usage tracking is associated with an account or anonymous.
     */
    trackingEnabled?: boolean;
}
