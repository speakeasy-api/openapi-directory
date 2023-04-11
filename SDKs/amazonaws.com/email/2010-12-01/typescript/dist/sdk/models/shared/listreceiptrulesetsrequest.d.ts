import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to list the receipt rule sets that exist under your AWS account. You use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
 */
export declare class ListReceiptRuleSetsRequest extends SpeakeasyBase {
    nextToken?: string;
}
