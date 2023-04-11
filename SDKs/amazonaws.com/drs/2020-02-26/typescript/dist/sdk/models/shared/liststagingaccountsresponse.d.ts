import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Success
 */
export declare class ListStagingAccountsResponse extends SpeakeasyBase {
    accounts?: Account[];
    nextToken?: string;
}
