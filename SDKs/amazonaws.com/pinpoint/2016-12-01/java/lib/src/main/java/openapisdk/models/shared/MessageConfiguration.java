package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MessageConfiguration
 * Specifies the message configuration settings for a campaign.
**/
public class MessageConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ADMMessage")
    public Message admMessage;
    public MessageConfiguration withAdmMessage(Message admMessage) {
        this.admMessage = admMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("APNSMessage")
    public Message apnsMessage;
    public MessageConfiguration withApnsMessage(Message apnsMessage) {
        this.apnsMessage = apnsMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaiduMessage")
    public Message baiduMessage;
    public MessageConfiguration withBaiduMessage(Message baiduMessage) {
        this.baiduMessage = baiduMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomMessage")
    public CampaignCustomMessage customMessage;
    public MessageConfiguration withCustomMessage(CampaignCustomMessage customMessage) {
        this.customMessage = customMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultMessage")
    public Message defaultMessage;
    public MessageConfiguration withDefaultMessage(Message defaultMessage) {
        this.defaultMessage = defaultMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailMessage")
    public CampaignEmailMessage emailMessage;
    public MessageConfiguration withEmailMessage(CampaignEmailMessage emailMessage) {
        this.emailMessage = emailMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GCMMessage")
    public Message gcmMessage;
    public MessageConfiguration withGcmMessage(Message gcmMessage) {
        this.gcmMessage = gcmMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InAppMessage")
    public CampaignInAppMessage inAppMessage;
    public MessageConfiguration withInAppMessage(CampaignInAppMessage inAppMessage) {
        this.inAppMessage = inAppMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SMSMessage")
    public CampaignSmsMessage smsMessage;
    public MessageConfiguration withSmsMessage(CampaignSmsMessage smsMessage) {
        this.smsMessage = smsMessage;
        return this;
    }
}