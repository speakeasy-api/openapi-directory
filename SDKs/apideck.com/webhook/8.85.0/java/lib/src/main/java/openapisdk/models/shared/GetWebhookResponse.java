package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetWebhookResponse {
    @JsonProperty("data")
    public Webhook data;
    public GetWebhookResponse withData(Webhook data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetWebhookResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}