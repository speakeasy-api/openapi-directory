import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAttributeNameEnum } from "./accountattributenameenum";
/**
 * Displays the attributes associated with a single Amazon Web Services account.
 */
export declare class AccountAttribute extends SpeakeasyBase {
    name: AccountAttributeNameEnum;
    value: string;
}
