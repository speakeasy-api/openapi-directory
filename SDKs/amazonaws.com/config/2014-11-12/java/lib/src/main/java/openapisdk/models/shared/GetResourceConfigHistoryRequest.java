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
 * GetResourceConfigHistoryRequest
 * The input for the <a>GetResourceConfigHistory</a> action.
**/
public class GetResourceConfigHistoryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chronologicalOrder")
    public ChronologicalOrderEnum chronologicalOrder;
    public GetResourceConfigHistoryRequest withChronologicalOrder(ChronologicalOrderEnum chronologicalOrder) {
        this.chronologicalOrder = chronologicalOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("earlierTime")
    public OffsetDateTime earlierTime;
    public GetResourceConfigHistoryRequest withEarlierTime(OffsetDateTime earlierTime) {
        this.earlierTime = earlierTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("laterTime")
    public OffsetDateTime laterTime;
    public GetResourceConfigHistoryRequest withLaterTime(OffsetDateTime laterTime) {
        this.laterTime = laterTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public GetResourceConfigHistoryRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetResourceConfigHistoryRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("resourceId")
    public String resourceId;
    public GetResourceConfigHistoryRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public GetResourceConfigHistoryRequest withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}