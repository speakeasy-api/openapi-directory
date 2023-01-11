package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateConnectionResponse {
    @JsonProperty("data")
    public Connection data;
    public CreateConnectionResponse withData(Connection data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateConnectionResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}