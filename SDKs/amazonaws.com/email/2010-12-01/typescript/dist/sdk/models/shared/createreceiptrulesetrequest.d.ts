import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to create an empty receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
 */
export declare class CreateReceiptRuleSetRequest extends SpeakeasyBase {
    ruleSetName: string;
}
