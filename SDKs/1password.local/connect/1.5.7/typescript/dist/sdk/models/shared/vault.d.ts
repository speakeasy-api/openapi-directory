import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VaultTypeEnum {
    UserCreated = "USER_CREATED",
    Personal = "PERSONAL",
    Everyone = "EVERYONE",
    Transfer = "TRANSFER"
}
/**
 * OK
 */
export declare class Vault extends SpeakeasyBase {
    /**
     * The vault version
     */
    attributeVersion?: number;
    /**
     * The version of the vault contents
     */
    contentVersion?: number;
    createdAt?: Date;
    description?: string;
    id?: string;
    /**
     * Number of active items in the vault
     */
    items?: number;
    name?: string;
    type?: VaultTypeEnum;
    updatedAt?: Date;
}
