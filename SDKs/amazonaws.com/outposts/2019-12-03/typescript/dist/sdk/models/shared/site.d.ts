import { SpeakeasyBase } from "../../../internal/utils";
import { RackPhysicalProperties } from "./rackphysicalproperties";
/**
 * Information about a site.
 */
export declare class Site extends SpeakeasyBase {
    /**
     * The ID of the Amazon Web Services account.
     */
    accountId?: string;
    /**
     * The description of the site.
     */
    description?: string;
    /**
     * The name of the site.
     */
    name?: string;
    notes?: string;
    operatingAddressCity?: string;
    operatingAddressCountryCode?: string;
    operatingAddressStateOrRegion?: string;
    rackPhysicalProperties?: RackPhysicalProperties;
    /**
     * The Amazon Resource Name (ARN) of the site.
     */
    siteArn?: string;
    /**
     * The ID of the site.
     */
    siteId?: string;
    tags?: Record<string, string>;
}
