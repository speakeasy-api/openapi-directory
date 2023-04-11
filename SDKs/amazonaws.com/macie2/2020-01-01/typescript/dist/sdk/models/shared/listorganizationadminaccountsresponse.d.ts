import { SpeakeasyBase } from "../../../internal/utils";
import { AdminAccount } from "./adminaccount";
/**
 * Success
 */
export declare class ListOrganizationAdminAccountsResponse extends SpeakeasyBase {
    adminAccounts?: AdminAccount[];
    nextToken?: string;
}
