package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookActivityAttributesV1WebhookV1Details {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public WebhookActivityAttributesV1WebhookV1Details withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attempt")
    public Long attempt;
    public WebhookActivityAttributesV1WebhookV1Details withAttempt(Long attempt) {
        this.attempt = attempt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptId")
    public String attemptId;
    public WebhookActivityAttributesV1WebhookV1Details withAttemptId(String attemptId) {
        this.attemptId = attemptId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public String event;
    public WebhookActivityAttributesV1WebhookV1Details withEvent(String event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public String protocol;
    public WebhookActivityAttributesV1WebhookV1Details withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public WebhookActivityAttributesV1WebhookV1Details withUsername(String username) {
        this.username = username;
        return this;
    }
}