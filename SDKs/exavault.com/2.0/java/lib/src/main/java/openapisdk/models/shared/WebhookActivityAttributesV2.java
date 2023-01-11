package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookActivityAttributesV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public WebhookActivityAttributesV2 withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptId")
    public String attemptId;
    public WebhookActivityAttributesV2 withAttemptId(String attemptId) {
        this.attemptId = attemptId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public WebhookActivityAttributesV2 withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public WebhookActivityAttributesV2WebhookV2Details details;
    public WebhookActivityAttributesV2 withDetails(WebhookActivityAttributesV2WebhookV2Details details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointUrl")
    public String endpointUrl;
    public WebhookActivityAttributesV2 withEndpointUrl(String endpointUrl) {
        this.endpointUrl = endpointUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public WebhookActivityAttributesV2EventEnum event;
    public WebhookActivityAttributesV2 withEvent(WebhookActivityAttributesV2EventEnum event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public WebhookActivityAttributesV2 withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resend")
    public Boolean resend;
    public WebhookActivityAttributesV2 withResend(Boolean resend) {
        this.resend = resend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourcePath")
    public String resourcePath;
    public WebhookActivityAttributesV2 withResourcePath(String resourcePath) {
        this.resourcePath = resourcePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public String response;
    public WebhookActivityAttributesV2 withResponse(String response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public WebhookActivityAttributesV2 withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public WebhookActivityAttributesV2 withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookFormat")
    public String webhookFormat;
    public WebhookActivityAttributesV2 withWebhookFormat(String webhookFormat) {
        this.webhookFormat = webhookFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookId")
    public Long webhookId;
    public WebhookActivityAttributesV2 withWebhookId(Long webhookId) {
        this.webhookId = webhookId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookPath")
    public String webhookPath;
    public WebhookActivityAttributesV2 withWebhookPath(String webhookPath) {
        this.webhookPath = webhookPath;
        return this;
    }
}