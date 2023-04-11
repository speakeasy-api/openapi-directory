import { SpeakeasyBase } from "../../../internal/utils";
import { EmailSendingAccountTypeEnum } from "./emailsendingaccounttypeenum";
/**
 * <p>The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool.</p> <note> <p>Amazon Cognito can send email messages with Amazon Simple Email Service resources in the Amazon Web Services Region where you created your user pool, and in alternate Regions in some cases. For more information on the supported Regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email settings for Amazon Cognito user pools</a>.</p> </note>
 */
export declare class EmailConfigurationType extends SpeakeasyBase {
    configurationSet?: string;
    emailSendingAccount?: EmailSendingAccountTypeEnum;
    from?: string;
    replyToEmailAddress?: string;
    sourceArn?: string;
}
