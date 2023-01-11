package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetListingResponse {
    @JsonProperty("data")
    public Listing data;
    public GetListingResponse withData(Listing data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetListingResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetListingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}