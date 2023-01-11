package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetConsumerResponse {
    @JsonProperty("data")
    public Consumer data;
    public GetConsumerResponse withData(Consumer data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetConsumerResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetConsumerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}