import { SpeakeasyBase } from "../../../internal/utils";
import { MetricAttribution } from "./metricattribution";
/**
 * Represents user interaction event information sent using the <code>PutEvents</code> API.
 */
export declare class Event extends SpeakeasyBase {
    eventId?: string;
    eventType: string;
    eventValue?: number;
    impression?: string[];
    itemId?: string;
    metricAttribution?: MetricAttribution;
    /**
     * <p>A string map of event-specific data that you might choose to record. For example, if a user rates a movie on your site, other than movie ID (<code>itemId</code>) and rating (<code>eventValue</code>) , you might also send the number of movie ratings made by the user.</p> <p>Each item in the map consists of a key-value pair. For example,</p> <p> <code>{"numberOfRatings": "12"}</code> </p> <p>The keys use camel case names that match the fields in the Interactions schema. In the above example, the <code>numberOfRatings</code> would match the 'NUMBER_OF_RATINGS' field defined in the Interactions schema.</p>
     */
    properties?: any;
    recommendationId?: string;
    sentAt: Date;
}
