import { SpeakeasyBase } from "../../../internal/utils";
import { Administrator } from "./administrator";
/**
 * Success
 */
export declare class ListOrganizationAdminAccountsResponse extends SpeakeasyBase {
    administrators?: Administrator[];
    nextToken?: string;
}
