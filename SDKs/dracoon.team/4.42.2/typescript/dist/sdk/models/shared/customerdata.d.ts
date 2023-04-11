import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Customer information
 */
export declare class CustomerData extends SpeakeasyBase {
    /**
     * User accounts limit
     */
    accountsLimit: number;
    /**
     * User accounts used
     */
    accountsUsed: number;
    /**
     * Number of guest user accounts
     */
    cntGuestUser: number;
    /**
     * Number of internal user accounts
     */
    cntInternalUser: number;
    /**
     * Clientside encryption for customer enabled
     */
    customerEncryptionEnabled: boolean;
    /**
     * Unique identifier for the customer
     */
    id: number;
    /**
     * Customer is Provider Customer
     */
    isProviderCustomer: boolean;
    /**
     * Customer name
     */
    name: string;
    /**
     * Space limit (in bytes). -1 for unlimited
     */
    spaceLimit: number;
    /**
     * Space used (in bytes)
     */
    spaceUsed: number;
}
