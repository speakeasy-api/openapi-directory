import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The address associated with the specified user.
 */
export declare class Address extends SpeakeasyBase {
    country?: string;
    formatted?: string;
    locality?: string;
    postalCode?: string;
    primary?: boolean;
    region?: string;
    streetAddress?: string;
    type?: string;
}
