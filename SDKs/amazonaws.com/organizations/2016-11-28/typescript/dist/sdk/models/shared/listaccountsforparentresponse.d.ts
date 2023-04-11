import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Success
 */
export declare class ListAccountsForParentResponse extends SpeakeasyBase {
    accounts?: Account[];
    nextToken?: string;
}
