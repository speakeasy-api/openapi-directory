import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the address
 */
export declare enum BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum {
    One = "1",
    Two = "2"
}
/**
 * Container for passing address data
 */
export declare class BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel extends SpeakeasyBase {
    addressAddition?: string;
    /**
     * The type of the address
     */
    addressType?: BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;
    /**
     * If set, the customeraddress was already archived at the given date. Further modification is disabled.
     */
    archivedAt?: Date;
    city?: string;
    /**
     * The name of the company
     */
    company?: string;
    /**
     * The ISO2 code of the country
     */
    countryCode?: string;
    /**
     * The internal Billbee id of the customer the address belongs to
     */
    customerId?: number;
    email?: string;
    fax?: string;
    firstName?: string;
    housenumber?: string;
    /**
     * The internal Billbee ID of the address record. Can be null if a new address is created
     */
    id?: number;
    lastName?: string;
    /**
     * Optionally an additional name field
     */
    name2?: string;
    /**
     * If set, the customeraddress was restored from the archive at the given date.
     */
    restoredAt?: Date;
    state?: string;
    street?: string;
    tel1?: string;
    tel2?: string;
    zip?: string;
}
