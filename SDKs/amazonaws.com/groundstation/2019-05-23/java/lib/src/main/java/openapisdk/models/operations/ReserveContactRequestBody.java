package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ReserveContactRequestBody {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public ReserveContactRequestBody withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("groundStation")
    public String groundStation;
    public ReserveContactRequestBody withGroundStation(String groundStation) {
        this.groundStation = groundStation;
        return this;
    }
    @JsonProperty("missionProfileArn")
    public String missionProfileArn;
    public ReserveContactRequestBody withMissionProfileArn(String missionProfileArn) {
        this.missionProfileArn = missionProfileArn;
        return this;
    }
    @JsonProperty("satelliteArn")
    public String satelliteArn;
    public ReserveContactRequestBody withSatelliteArn(String satelliteArn) {
        this.satelliteArn = satelliteArn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public ReserveContactRequestBody withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ReserveContactRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}