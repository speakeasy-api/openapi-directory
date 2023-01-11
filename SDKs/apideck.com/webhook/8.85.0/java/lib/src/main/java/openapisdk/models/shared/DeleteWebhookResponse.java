package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteWebhookResponse {
    @JsonProperty("data")
    public Webhook data;
    public DeleteWebhookResponse withData(Webhook data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public DeleteWebhookResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public DeleteWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}