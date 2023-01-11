package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ApiDestination
 * Contains details about an API destination.
**/
public class ApiDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiDestinationArn")
    public String apiDestinationArn;
    public ApiDestination withApiDestinationArn(String apiDestinationArn) {
        this.apiDestinationArn = apiDestinationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiDestinationState")
    public ApiDestinationStateEnum apiDestinationState;
    public ApiDestination withApiDestinationState(ApiDestinationStateEnum apiDestinationState) {
        this.apiDestinationState = apiDestinationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionArn")
    public String connectionArn;
    public ApiDestination withConnectionArn(String connectionArn) {
        this.connectionArn = connectionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public ApiDestination withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HttpMethod")
    public ApiDestinationHttpMethodEnum httpMethod;
    public ApiDestination withHttpMethod(ApiDestinationHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvocationEndpoint")
    public String invocationEndpoint;
    public ApiDestination withInvocationEndpoint(String invocationEndpoint) {
        this.invocationEndpoint = invocationEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvocationRateLimitPerSecond")
    public Long invocationRateLimitPerSecond;
    public ApiDestination withInvocationRateLimitPerSecond(Long invocationRateLimitPerSecond) {
        this.invocationRateLimitPerSecond = invocationRateLimitPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedTime")
    public OffsetDateTime lastModifiedTime;
    public ApiDestination withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ApiDestination withName(String name) {
        this.name = name;
        return this;
    }
}