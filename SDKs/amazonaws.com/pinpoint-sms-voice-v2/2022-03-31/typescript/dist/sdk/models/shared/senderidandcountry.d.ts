import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The alphanumeric sender ID in a specific country that you want to describe. For more information on sender IDs see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-sender-id.html">Requesting sender IDs for SMS messaging with Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>.
 */
export declare class SenderIdAndCountry extends SpeakeasyBase {
    isoCountryCode: string;
    senderId: string;
}
