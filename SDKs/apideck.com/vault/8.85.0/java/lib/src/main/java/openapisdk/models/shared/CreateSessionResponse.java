package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSessionResponse {
    @JsonProperty("data")
    public CreateSessionResponseData data;
    public CreateSessionResponse withData(CreateSessionResponseData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateSessionResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}