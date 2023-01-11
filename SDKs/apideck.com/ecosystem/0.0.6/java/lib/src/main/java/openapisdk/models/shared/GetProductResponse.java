package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetProductResponse {
    @JsonProperty("data")
    public Product data;
    public GetProductResponse withData(Product data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetProductResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}