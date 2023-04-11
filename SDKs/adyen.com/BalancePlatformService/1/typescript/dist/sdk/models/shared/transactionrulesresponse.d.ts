import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionRule } from "./transactionrule";
/**
 * OK - the request has succeeded.
 */
export declare class TransactionRulesResponse extends SpeakeasyBase {
    /**
     * List of transaction rules.
     */
    transactionRules?: TransactionRule[];
}
