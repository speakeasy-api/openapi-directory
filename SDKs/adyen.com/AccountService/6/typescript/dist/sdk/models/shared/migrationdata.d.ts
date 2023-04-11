import { SpeakeasyBase } from "../../../internal/utils";
import { MigratedAccounts } from "./migratedaccounts";
import { MigratedStores } from "./migratedstores";
export declare class MigrationData extends SpeakeasyBase {
    /**
     * The unique identifier of the account holder in the balance platform.
     */
    accountHolderId?: string;
    /**
     * The unique identifier of the balance platfrom to which the account holder was migrated.
     */
    balancePlatform?: string;
    /**
     * Set to **true** if the account holder has been migrated.
     */
    migrated?: boolean;
    /**
     * Contains the mapping of virtual account codes (classic integration) to the balance account codes (balance platform) associated with the migrated account holder.
     */
    migratedAccounts?: MigratedAccounts[];
    /**
     * Contains the mapping of business lines and stores associated with the migrated account holder.
     */
    migratedStores?: MigratedStores[];
    /**
     * The date when account holder was migrated.
     */
    migrationDate?: Date;
}
