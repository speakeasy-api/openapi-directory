import { SpeakeasyBase } from "../../../internal/utils";
import { AccountInsightHealth } from "./accountinsighthealth";
/**
 *  Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account.
 */
export declare class AccountHealth extends SpeakeasyBase {
    accountId?: string;
    insight?: AccountInsightHealth;
}
