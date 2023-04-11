import { SpeakeasyBase } from "../../../internal/utils";
import { ReceiptRule } from "./receiptrule";
/**
 * Represents a request to create a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
 */
export declare class CreateReceiptRuleRequest extends SpeakeasyBase {
    after?: string;
    rule: ReceiptRule;
    ruleSetName: string;
}
