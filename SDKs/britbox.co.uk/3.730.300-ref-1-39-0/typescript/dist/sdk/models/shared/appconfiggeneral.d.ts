import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppConfigGeneral extends SpeakeasyBase {
    /**
     * The currency code to target.
     */
    currencyCode?: string;
    /**
     * A map of custom configuration fields.
     */
    customFields?: Record<string, any>;
    /**
     * The default time zone of the site. e.g. "Etc/GMT"
     */
    defaultTimeZone?: string;
    /**
     * The Facebook application id associated with an environment.
     */
    facebookAppId?: string;
    /**
     * A Google Analytics token to track applicaton user events.
     */
    gaToken?: string;
    /**
     * A map of default item image types where the key is the item types.
     */
    itemImageTypes?: Record<string, string>;
    /**
     * Whether to require sign in for customers to access content.
     */
    mandatorySignIn?: boolean;
    /**
     * The maximum value allowed for user ratings.
     */
    maxUserRating?: number;
    /**
     * The public Stripe key to use for payment transactions.
     */
    stripeKey?: string;
    /**
     * The url of the primary website.
     */
    websiteUrl?: string;
}
