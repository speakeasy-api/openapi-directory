import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The SMS configuration type is the settings that your Amazon Cognito user pool must use to send an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account.
 */
export declare class SmsConfigurationType extends SpeakeasyBase {
    externalId?: string;
    snsCallerArn: string;
    snsRegion?: string;
}
