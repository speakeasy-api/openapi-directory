package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateConnectionResponse {
    @JsonProperty("data")
    public Connection data;
    public UpdateConnectionResponse withData(Connection data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public UpdateConnectionResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public UpdateConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}