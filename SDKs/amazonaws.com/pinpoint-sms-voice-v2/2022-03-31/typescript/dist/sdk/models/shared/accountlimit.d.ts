import { SpeakeasyBase } from "../../../internal/utils";
import { AccountLimitNameEnum } from "./accountlimitnameenum";
/**
 * The current resource quotas associated with an Amazon Web Services account.
 */
export declare class AccountLimit extends SpeakeasyBase {
    max: number;
    name: AccountLimitNameEnum;
    used: number;
}
