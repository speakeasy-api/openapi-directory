import { SpeakeasyBase } from "../../../internal/utils";
export declare class BillbeeInterfacesBillbeeAPIModelOrderUserInput extends SpeakeasyBase {
    /**
     * The Billbee internal id of the shop connection
     */
    billbeeShopId?: number;
    /**
     * The name of shop connection in Billbee
     */
    billbeeShopName?: string;
    /**
     * The email address of this customer
     */
    email?: string;
    /**
     * The first name of this customer
     */
    firstName?: string;
    /**
     * The Billbee internal id of this customer
     */
    id?: string;
    /**
     * The last name of this customer
     */
    lastName?: string;
    /**
     * The nick name (if available) from the original system
     */
    nick?: string;
    /**
     * The name of the platform from which this customer originated
     */
    platform?: string;
}
export declare class BillbeeInterfacesBillbeeAPIModelOrderUser extends SpeakeasyBase {
    /**
     * The Billbee internal id of the shop connection
     */
    billbeeShopId?: number;
    /**
     * The name of shop connection in Billbee
     */
    billbeeShopName?: string;
    /**
     * The email address of this customer
     */
    email?: string;
    /**
     * The first name of this customer
     */
    firstName?: string;
    /**
     * The full name ("firstname lastname") of this customer
     */
    fullName?: string;
    /**
     * The Billbee internal id of this customer
     */
    id?: string;
    /**
     * The last name of this customer
     */
    lastName?: string;
    /**
     * The nick name (if available) from the original system
     */
    nick?: string;
    /**
     * The name of the platform from which this customer originated
     */
    platform?: string;
}
