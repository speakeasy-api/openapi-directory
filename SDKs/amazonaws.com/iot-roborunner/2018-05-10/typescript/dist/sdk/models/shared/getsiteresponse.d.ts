import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class GetSiteResponse extends SpeakeasyBase {
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
    /**
     * A high-level description of the site.
     */
    description?: string;
    /**
     * Filters access by the site's identifier
     */
    id: string;
    /**
     * Human friendly name of the resource.
     */
    name: string;
    /**
     * Timestamp at which the resource was last updated.
     */
    updatedAt: Date;
}
