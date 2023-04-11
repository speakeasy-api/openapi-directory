import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Facility containing destinations, workers, activities, and tasks.
 */
export declare class Site extends SpeakeasyBase {
    /**
     * Site ARN.
     */
    arn: string;
    /**
     * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
     */
    countryCode: string;
    /**
     * Timestamp at which the resource was created.
     */
    createdAt: Date;
    name: string;
}
