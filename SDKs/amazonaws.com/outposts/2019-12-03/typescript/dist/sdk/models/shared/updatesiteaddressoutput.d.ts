import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { AddressTypeEnum } from "./addresstypeenum";
/**
 * Success
 */
export declare class UpdateSiteAddressOutput extends SpeakeasyBase {
    address?: Address;
    addressType?: AddressTypeEnum;
}
