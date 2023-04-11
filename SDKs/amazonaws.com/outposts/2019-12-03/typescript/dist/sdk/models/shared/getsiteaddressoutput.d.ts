import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { AddressTypeEnum } from "./addresstypeenum";
/**
 * Success
 */
export declare class GetSiteAddressOutput extends SpeakeasyBase {
    address?: Address;
    addressType?: AddressTypeEnum;
    /**
     * The ID of the site.
     */
    siteId?: string;
}
