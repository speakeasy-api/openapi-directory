package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListTestGridSessionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTimeAfter")
    public OffsetDateTime creationTimeAfter;
    public ListTestGridSessionsRequest withCreationTimeAfter(OffsetDateTime creationTimeAfter) {
        this.creationTimeAfter = creationTimeAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTimeBefore")
    public OffsetDateTime creationTimeBefore;
    public ListTestGridSessionsRequest withCreationTimeBefore(OffsetDateTime creationTimeBefore) {
        this.creationTimeBefore = creationTimeBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTimeAfter")
    public OffsetDateTime endTimeAfter;
    public ListTestGridSessionsRequest withEndTimeAfter(OffsetDateTime endTimeAfter) {
        this.endTimeAfter = endTimeAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTimeBefore")
    public OffsetDateTime endTimeBefore;
    public ListTestGridSessionsRequest withEndTimeBefore(OffsetDateTime endTimeBefore) {
        this.endTimeBefore = endTimeBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResult")
    public Long maxResult;
    public ListTestGridSessionsRequest withMaxResult(Long maxResult) {
        this.maxResult = maxResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListTestGridSessionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("projectArn")
    public String projectArn;
    public ListTestGridSessionsRequest withProjectArn(String projectArn) {
        this.projectArn = projectArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TestGridSessionStatusEnum status;
    public ListTestGridSessionsRequest withStatus(TestGridSessionStatusEnum status) {
        this.status = status;
        return this;
    }
}