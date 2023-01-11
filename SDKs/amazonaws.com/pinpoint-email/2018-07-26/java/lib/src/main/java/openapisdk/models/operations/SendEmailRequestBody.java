package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendEmailRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationSetName")
    public String configurationSetName;
    public SendEmailRequestBody withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @JsonProperty("Content")
    public SendEmailRequestBodyContent content;
    public SendEmailRequestBody withContent(SendEmailRequestBodyContent content) {
        this.content = content;
        return this;
    }
    @JsonProperty("Destination")
    public SendEmailRequestBodyDestination destination;
    public SendEmailRequestBody withDestination(SendEmailRequestBodyDestination destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailTags")
    public openapisdk.models.shared.MessageTag[] emailTags;
    public SendEmailRequestBody withEmailTags(openapisdk.models.shared.MessageTag[] emailTags) {
        this.emailTags = emailTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeedbackForwardingEmailAddress")
    public String feedbackForwardingEmailAddress;
    public SendEmailRequestBody withFeedbackForwardingEmailAddress(String feedbackForwardingEmailAddress) {
        this.feedbackForwardingEmailAddress = feedbackForwardingEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FromEmailAddress")
    public String fromEmailAddress;
    public SendEmailRequestBody withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplyToAddresses")
    public String[] replyToAddresses;
    public SendEmailRequestBody withReplyToAddresses(String[] replyToAddresses) {
        this.replyToAddresses = replyToAddresses;
        return this;
    }
}