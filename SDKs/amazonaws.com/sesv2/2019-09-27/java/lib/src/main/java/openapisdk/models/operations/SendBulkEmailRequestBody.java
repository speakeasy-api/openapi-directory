package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendBulkEmailRequestBody {
    @JsonProperty("BulkEmailEntries")
    public openapisdk.models.shared.BulkEmailEntry[] bulkEmailEntries;
    public SendBulkEmailRequestBody withBulkEmailEntries(openapisdk.models.shared.BulkEmailEntry[] bulkEmailEntries) {
        this.bulkEmailEntries = bulkEmailEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationSetName")
    public String configurationSetName;
    public SendBulkEmailRequestBody withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @JsonProperty("DefaultContent")
    public SendBulkEmailRequestBodyDefaultContent defaultContent;
    public SendBulkEmailRequestBody withDefaultContent(SendBulkEmailRequestBodyDefaultContent defaultContent) {
        this.defaultContent = defaultContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultEmailTags")
    public openapisdk.models.shared.MessageTag[] defaultEmailTags;
    public SendBulkEmailRequestBody withDefaultEmailTags(openapisdk.models.shared.MessageTag[] defaultEmailTags) {
        this.defaultEmailTags = defaultEmailTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeedbackForwardingEmailAddress")
    public String feedbackForwardingEmailAddress;
    public SendBulkEmailRequestBody withFeedbackForwardingEmailAddress(String feedbackForwardingEmailAddress) {
        this.feedbackForwardingEmailAddress = feedbackForwardingEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeedbackForwardingEmailAddressIdentityArn")
    public String feedbackForwardingEmailAddressIdentityArn;
    public SendBulkEmailRequestBody withFeedbackForwardingEmailAddressIdentityArn(String feedbackForwardingEmailAddressIdentityArn) {
        this.feedbackForwardingEmailAddressIdentityArn = feedbackForwardingEmailAddressIdentityArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FromEmailAddress")
    public String fromEmailAddress;
    public SendBulkEmailRequestBody withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FromEmailAddressIdentityArn")
    public String fromEmailAddressIdentityArn;
    public SendBulkEmailRequestBody withFromEmailAddressIdentityArn(String fromEmailAddressIdentityArn) {
        this.fromEmailAddressIdentityArn = fromEmailAddressIdentityArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplyToAddresses")
    public String[] replyToAddresses;
    public SendBulkEmailRequestBody withReplyToAddresses(String[] replyToAddresses) {
        this.replyToAddresses = replyToAddresses;
        return this;
    }
}