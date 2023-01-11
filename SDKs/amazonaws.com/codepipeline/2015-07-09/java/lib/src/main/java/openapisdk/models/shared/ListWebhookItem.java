package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ListWebhookItem
 * The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN.
**/
public class ListWebhookItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public ListWebhookItem withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("definition")
    public WebhookDefinition definition;
    public ListWebhookItem withDefinition(WebhookDefinition definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public String errorCode;
    public ListWebhookItem withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public ListWebhookItem withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastTriggered")
    public OffsetDateTime lastTriggered;
    public ListWebhookItem withLastTriggered(OffsetDateTime lastTriggered) {
        this.lastTriggered = lastTriggered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public ListWebhookItem withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ListWebhookItem withUrl(String url) {
        this.url = url;
        return this;
    }
}