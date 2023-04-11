import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Organisation Name resource.
 */
export declare class OrganisationNameInput extends SpeakeasyBase {
    /**
     * The organisation's name.
     */
    name?: string;
}
/**
 * The Organisation Name resource.
 */
export declare class OrganisationName extends SpeakeasyBase {
    /**
     * The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    fromDate?: Date;
    /**
     * The resource's unique identifier.
     */
    id?: string;
    /**
     * The organisation's name.
     */
    name?: string;
    /**
     * The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
     */
    toDate?: Date;
}
