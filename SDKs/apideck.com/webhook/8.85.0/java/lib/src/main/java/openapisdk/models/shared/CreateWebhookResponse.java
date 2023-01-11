package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateWebhookResponse {
    @JsonProperty("data")
    public Webhook data;
    public CreateWebhookResponse withData(Webhook data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateWebhookResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}