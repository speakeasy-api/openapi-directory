package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateTrackerResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public CreateTrackerResponse withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonProperty("TrackerArn")
    public String trackerArn;
    public CreateTrackerResponse withTrackerArn(String trackerArn) {
        this.trackerArn = trackerArn;
        return this;
    }
    @JsonProperty("TrackerName")
    public String trackerName;
    public CreateTrackerResponse withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
}