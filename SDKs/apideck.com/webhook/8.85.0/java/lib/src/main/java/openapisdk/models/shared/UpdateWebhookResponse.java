package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateWebhookResponse {
    @JsonProperty("data")
    public Webhook data;
    public UpdateWebhookResponse withData(Webhook data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public UpdateWebhookResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public UpdateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}