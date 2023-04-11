import { SpeakeasyBase } from "../../../internal/utils";
export declare class MigratedAccounts extends SpeakeasyBase {
    /**
     * The unique identifier of the account of the migrated account holder in the balance platform.
     */
    balanceAccountId?: string;
    /**
     * The unique identifier of the account of the migrated account holder in the classic integration.
     */
    virtualAccountCode?: string;
}
