package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DirectMessageConfiguration
 * Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
**/
public class DirectMessageConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ADMMessage")
    public AdmMessage admMessage;
    public DirectMessageConfiguration withAdmMessage(AdmMessage admMessage) {
        this.admMessage = admMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("APNSMessage")
    public ApnsMessage apnsMessage;
    public DirectMessageConfiguration withApnsMessage(ApnsMessage apnsMessage) {
        this.apnsMessage = apnsMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaiduMessage")
    public BaiduMessage baiduMessage;
    public DirectMessageConfiguration withBaiduMessage(BaiduMessage baiduMessage) {
        this.baiduMessage = baiduMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultMessage")
    public DefaultMessage defaultMessage;
    public DirectMessageConfiguration withDefaultMessage(DefaultMessage defaultMessage) {
        this.defaultMessage = defaultMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultPushNotificationMessage")
    public DefaultPushNotificationMessage defaultPushNotificationMessage;
    public DirectMessageConfiguration withDefaultPushNotificationMessage(DefaultPushNotificationMessage defaultPushNotificationMessage) {
        this.defaultPushNotificationMessage = defaultPushNotificationMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailMessage")
    public EmailMessage emailMessage;
    public DirectMessageConfiguration withEmailMessage(EmailMessage emailMessage) {
        this.emailMessage = emailMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GCMMessage")
    public GcmMessage gcmMessage;
    public DirectMessageConfiguration withGcmMessage(GcmMessage gcmMessage) {
        this.gcmMessage = gcmMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SMSMessage")
    public SmsMessage smsMessage;
    public DirectMessageConfiguration withSmsMessage(SmsMessage smsMessage) {
        this.smsMessage = smsMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VoiceMessage")
    public VoiceMessage voiceMessage;
    public DirectMessageConfiguration withVoiceMessage(VoiceMessage voiceMessage) {
        this.voiceMessage = voiceMessage;
        return this;
    }
}