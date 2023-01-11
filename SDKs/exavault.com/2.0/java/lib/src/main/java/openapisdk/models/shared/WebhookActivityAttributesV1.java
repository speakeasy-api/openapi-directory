package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookActivityAttributesV1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public WebhookActivityAttributesV1 withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptId")
    public String attemptId;
    public WebhookActivityAttributesV1 withAttemptId(String attemptId) {
        this.attemptId = attemptId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public WebhookActivityAttributesV1 withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public WebhookActivityAttributesV1WebhookV1Details details;
    public WebhookActivityAttributesV1 withDetails(WebhookActivityAttributesV1WebhookV1Details details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointUrl")
    public String endpointUrl;
    public WebhookActivityAttributesV1 withEndpointUrl(String endpointUrl) {
        this.endpointUrl = endpointUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public WebhookActivityAttributesV1EventEnum event;
    public WebhookActivityAttributesV1 withEvent(WebhookActivityAttributesV1EventEnum event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public WebhookActivityAttributesV1 withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resend")
    public Boolean resend;
    public WebhookActivityAttributesV1 withResend(Boolean resend) {
        this.resend = resend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourcePath")
    public String resourcePath;
    public WebhookActivityAttributesV1 withResourcePath(String resourcePath) {
        this.resourcePath = resourcePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public String response;
    public WebhookActivityAttributesV1 withResponse(String response) {
        this.response = response;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public WebhookActivityAttributesV1 withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public WebhookActivityAttributesV1 withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookFormat")
    public String webhookFormat;
    public WebhookActivityAttributesV1 withWebhookFormat(String webhookFormat) {
        this.webhookFormat = webhookFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookId")
    public Long webhookId;
    public WebhookActivityAttributesV1 withWebhookId(Long webhookId) {
        this.webhookId = webhookId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhookPath")
    public String webhookPath;
    public WebhookActivityAttributesV1 withWebhookPath(String webhookPath) {
        this.webhookPath = webhookPath;
        return this;
    }
}