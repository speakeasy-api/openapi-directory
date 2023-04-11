import { SpeakeasyBase } from "../../../internal/utils";
import { Coupon } from "./coupon";
import { Image } from "./image";
import { Terms } from "./terms";
/**
 * The result set for the event search.
 */
export declare class Event extends SpeakeasyBase {
    /**
     * A list of coupons associated with the event.
     */
    applicableCoupons?: Coupon[];
    /**
     * The event description.
     */
    description?: string;
    /**
     * The end date for the event.
     */
    endDate?: string;
    /**
     * The URL of the View Event page for the event, which includes the affiliate tracking ID.
     */
    eventAffiliateWebUrl?: string;
    /**
     * The unique identifier for the event.
     */
    eventId?: string;
    /**
     * The web URL for the event.
     */
    eventWebUrl?: string;
    /**
     * The images for the event.
     */
    images?: Image[];
    /**
     * The start date for the event.
     */
    startDate?: string;
    /**
     * The terms for the event, provided in a full-text description and summary.
     */
    terms?: Terms;
    /**
     * The title of the event.
     */
    title?: string;
}
