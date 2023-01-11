package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCollectionResponse {
    @JsonProperty("data")
    public Collection data;
    public GetCollectionResponse withData(Collection data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetCollectionResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}