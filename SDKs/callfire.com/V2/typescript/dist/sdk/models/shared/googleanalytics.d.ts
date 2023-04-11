import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Google Analytics for Call Tracking
 */
export declare class GoogleAnalytics extends SpeakeasyBase {
    /**
     * A category to group. For example: Sales or Support
     */
    category?: string;
    /**
     * A domain name for analytics
     */
    domain?: string;
    /**
     * An id of a Google account, example: UA-XXXXX-2X
     */
    googleAccountId?: string;
}
