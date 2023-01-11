package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApiDestinationRequest {
    @JsonProperty("ConnectionArn")
    public String connectionArn;
    public CreateApiDestinationRequest withConnectionArn(String connectionArn) {
        this.connectionArn = connectionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateApiDestinationRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("HttpMethod")
    public ApiDestinationHttpMethodEnum httpMethod;
    public CreateApiDestinationRequest withHttpMethod(ApiDestinationHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonProperty("InvocationEndpoint")
    public String invocationEndpoint;
    public CreateApiDestinationRequest withInvocationEndpoint(String invocationEndpoint) {
        this.invocationEndpoint = invocationEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvocationRateLimitPerSecond")
    public Long invocationRateLimitPerSecond;
    public CreateApiDestinationRequest withInvocationRateLimitPerSecond(Long invocationRateLimitPerSecond) {
        this.invocationRateLimitPerSecond = invocationRateLimitPerSecond;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateApiDestinationRequest withName(String name) {
        this.name = name;
        return this;
    }
}