import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to delete a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
 */
export declare class DeleteReceiptRuleRequest extends SpeakeasyBase {
    ruleName: string;
    ruleSetName: string;
}
