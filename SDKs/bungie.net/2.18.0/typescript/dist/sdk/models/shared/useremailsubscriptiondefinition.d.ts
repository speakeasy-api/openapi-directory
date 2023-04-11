import { SpeakeasyBase } from "../../../internal/utils";
import { UserEMailSettingSubscriptionLocalization } from "./useremailsettingsubscriptionlocalization";
/**
 * Defines a single subscription: permission to send emails for a specific, focused subject (generally timeboxed, such as for a specific release of a product or feature).
 */
export declare class UserEmailSubscriptionDefinition extends SpeakeasyBase {
    /**
     * A dictionary of localized text for the EMail Opt-in setting, keyed by the locale.
     */
    localization?: Record<string, UserEMailSettingSubscriptionLocalization>;
    /**
     * The unique identifier for this subscription.
     */
    name?: string;
    /**
     * The bitflag value for this subscription. Should be a unique power of two value.
     */
    value?: number;
}
