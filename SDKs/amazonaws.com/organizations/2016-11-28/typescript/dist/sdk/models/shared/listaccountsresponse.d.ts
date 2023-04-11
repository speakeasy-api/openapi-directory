import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Success
 */
export declare class ListAccountsResponse extends SpeakeasyBase {
    accounts?: Account[];
    nextToken?: string;
}
