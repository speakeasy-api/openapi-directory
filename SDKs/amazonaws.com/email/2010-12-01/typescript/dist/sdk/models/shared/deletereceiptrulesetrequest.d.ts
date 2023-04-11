import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to delete a receipt rule set and all of the receipt rules it contains. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
 */
export declare class DeleteReceiptRuleSetRequest extends SpeakeasyBase {
    ruleSetName: string;
}
