import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Active Directory information
 */
export declare class ActiveDirectory extends SpeakeasyBase {
    /**
     * Unique name for an Active Directory configuration
     */
    alias: string;
    /**
     * ID
     */
    id: number;
    /**
     * Is available for all customers
     */
    isGlobalAvailable: boolean;
}
