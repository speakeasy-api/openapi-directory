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
 * ApiRequest
 * Represents a request that was made to the API. Including what Token was used and what resource was accessed.
**/
public class ApiRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public ApiRequestActionEnum action;
    public ApiRequest withAction(ApiRequestActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor")
    public ApiRequestActor actor;
    public ApiRequest withActor(ApiRequestActor actor) {
        this.actor = actor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ApiRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public ApiRequestResource resource;
    public ApiRequest withResource(ApiRequestResource resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public ApiRequestResultEnum result;
    public ApiRequest withResult(ApiRequestResultEnum result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public ApiRequest withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}