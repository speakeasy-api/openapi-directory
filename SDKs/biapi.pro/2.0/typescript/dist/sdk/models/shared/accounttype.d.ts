import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful GET on AccountType resource
 */
export declare class AccountType extends SpeakeasyBase {
    /**
     * Color of the account type (hexdecimal)
     */
    color?: string;
    /**
     * Name to display in singular
     */
    displayName: string;
    /**
     * Name to display in plurial
     */
    displayNameP: string;
    /**
     * ID of the account type
     */
    id: number;
    /**
     * Id of the parent type
     */
    idParent?: number;
    /**
     * Is it an investment account
     */
    isInvest: boolean;
    /**
     * Name of the account type
     */
    name: string;
    /**
     * Product associated with the account
     */
    product?: string;
    /**
     * Map to the weboob_type_id
     */
    weboobTypeId: number;
}
