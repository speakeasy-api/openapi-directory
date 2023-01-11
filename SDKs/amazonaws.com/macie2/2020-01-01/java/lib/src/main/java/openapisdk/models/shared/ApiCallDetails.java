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
 * ApiCallDetails
 * Provides information about an API operation that an entity invoked for an affected resource.
**/
public class ApiCallDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api")
    public String api;
    public ApiCallDetails withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiServiceName")
    public String apiServiceName;
    public ApiCallDetails withApiServiceName(String apiServiceName) {
        this.apiServiceName = apiServiceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("firstSeen")
    public OffsetDateTime firstSeen;
    public ApiCallDetails withFirstSeen(OffsetDateTime firstSeen) {
        this.firstSeen = firstSeen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastSeen")
    public OffsetDateTime lastSeen;
    public ApiCallDetails withLastSeen(OffsetDateTime lastSeen) {
        this.lastSeen = lastSeen;
        return this;
    }
}