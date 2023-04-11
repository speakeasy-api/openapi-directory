import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to delete an IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.
 */
export declare class DeleteReceiptFilterRequest extends SpeakeasyBase {
    filterName: string;
}
