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
 * AnomalyInstance
 * The specific duration in which the metric is flagged as anomalous.
**/
public class AnomalyInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public AnomalyInstance withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AnomalyInstance withId(String id) {
        this.id = id;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public AnomalyInstance withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userFeedback")
    public UserFeedback userFeedback;
    public AnomalyInstance withUserFeedback(UserFeedback userFeedback) {
        this.userFeedback = userFeedback;
        return this;
    }
}