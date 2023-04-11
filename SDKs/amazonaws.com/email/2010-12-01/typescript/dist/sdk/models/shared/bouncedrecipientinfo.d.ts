import { SpeakeasyBase } from "../../../internal/utils";
import { BounceTypeEnum } from "./bouncetypeenum";
import { RecipientDsnFields } from "./recipientdsnfields";
/**
 * <p>Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.</p> <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES Developer Guide</a>.</p>
 */
export declare class BouncedRecipientInfo extends SpeakeasyBase {
    bounceType?: BounceTypeEnum;
    recipient: string;
    recipientArn?: string;
    recipientDsnFields?: RecipientDsnFields;
}
