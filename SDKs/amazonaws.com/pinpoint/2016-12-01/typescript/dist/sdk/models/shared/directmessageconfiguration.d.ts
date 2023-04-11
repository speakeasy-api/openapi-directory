import { SpeakeasyBase } from "../../../internal/utils";
import { ADMMessage } from "./admmessage";
import { APNSMessage } from "./apnsmessage";
import { BaiduMessage } from "./baidumessage";
import { DefaultMessage } from "./defaultmessage";
import { DefaultPushNotificationMessage } from "./defaultpushnotificationmessage";
import { EmailMessage } from "./emailmessage";
import { GCMMessage } from "./gcmmessage";
import { SMSMessage } from "./smsmessage";
import { VoiceMessage } from "./voicemessage";
/**
 * Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
 */
export declare class DirectMessageConfiguration extends SpeakeasyBase {
    admMessage?: ADMMessage;
    apnsMessage?: APNSMessage;
    baiduMessage?: BaiduMessage;
    defaultMessage?: DefaultMessage;
    defaultPushNotificationMessage?: DefaultPushNotificationMessage;
    emailMessage?: EmailMessage;
    gcmMessage?: GCMMessage;
    smsMessage?: SMSMessage;
    voiceMessage?: VoiceMessage;
}
