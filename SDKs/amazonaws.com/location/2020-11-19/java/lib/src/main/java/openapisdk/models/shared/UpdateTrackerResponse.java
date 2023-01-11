package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateTrackerResponse {
    @JsonProperty("TrackerArn")
    public String trackerArn;
    public UpdateTrackerResponse withTrackerArn(String trackerArn) {
        this.trackerArn = trackerArn;
        return this;
    }
    @JsonProperty("TrackerName")
    public String trackerName;
    public UpdateTrackerResponse withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;
    public UpdateTrackerResponse withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}