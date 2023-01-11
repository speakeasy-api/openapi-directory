package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetDevicePositionHistoryRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EndTimeExclusive")
    public OffsetDateTime endTimeExclusive;
    public GetDevicePositionHistoryRequestBody withEndTimeExclusive(OffsetDateTime endTimeExclusive) {
        this.endTimeExclusive = endTimeExclusive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetDevicePositionHistoryRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTimeInclusive")
    public OffsetDateTime startTimeInclusive;
    public GetDevicePositionHistoryRequestBody withStartTimeInclusive(OffsetDateTime startTimeInclusive) {
        this.startTimeInclusive = startTimeInclusive;
        return this;
    }
}