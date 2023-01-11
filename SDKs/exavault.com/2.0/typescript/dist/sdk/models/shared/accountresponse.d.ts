import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { User } from "./user";
export declare class AccountResponse extends SpeakeasyBase {
    data?: Account;
    included?: User[];
    responseStatus?: number;
}
