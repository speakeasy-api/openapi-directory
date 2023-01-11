package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetConnectionResponse {
    @JsonProperty("data")
    public Connection data;
    public GetConnectionResponse withData(Connection data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetConnectionResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}