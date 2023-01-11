package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestIdentityProviderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public TestIdentityProviderResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Response")
    public String response;
    public TestIdentityProviderResponse withResponse(String response) {
        this.response = response;
        return this;
    }
    @JsonProperty("StatusCode")
    public Long statusCode;
    public TestIdentityProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonProperty("Url")
    public String url;
    public TestIdentityProviderResponse withUrl(String url) {
        this.url = url;
        return this;
    }
}