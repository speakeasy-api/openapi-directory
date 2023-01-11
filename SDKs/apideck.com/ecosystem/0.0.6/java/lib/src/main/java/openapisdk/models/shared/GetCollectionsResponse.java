package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCollectionsResponse {
    @JsonProperty("data")
    public Collection[] data;
    public GetCollectionsResponse withData(Collection[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetCollectionsResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetCollectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}