import { SpeakeasyBase } from "../../../internal/utils";
import { ReceiptFilter } from "./receiptfilter";
/**
 * Represents a request to create a new IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
 */
export declare class CreateReceiptFilterRequest extends SpeakeasyBase {
    filter: ReceiptFilter;
}
