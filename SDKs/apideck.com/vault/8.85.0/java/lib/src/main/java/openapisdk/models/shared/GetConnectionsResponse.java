package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetConnectionsResponse {
    @JsonProperty("data")
    public Connection[] data;
    public GetConnectionsResponse withData(Connection[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetConnectionsResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}