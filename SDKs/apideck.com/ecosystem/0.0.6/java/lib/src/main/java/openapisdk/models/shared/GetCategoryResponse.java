package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCategoryResponse {
    @JsonProperty("data")
    public Category data;
    public GetCategoryResponse withData(Category data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetCategoryResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}