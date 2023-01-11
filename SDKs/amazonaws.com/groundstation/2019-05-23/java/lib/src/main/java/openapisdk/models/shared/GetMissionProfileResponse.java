package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetMissionProfileResponse
 * <p/>
**/
public class GetMissionProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactPostPassDurationSeconds")
    public Long contactPostPassDurationSeconds;
    public GetMissionProfileResponse withContactPostPassDurationSeconds(Long contactPostPassDurationSeconds) {
        this.contactPostPassDurationSeconds = contactPostPassDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactPrePassDurationSeconds")
    public Long contactPrePassDurationSeconds;
    public GetMissionProfileResponse withContactPrePassDurationSeconds(Long contactPrePassDurationSeconds) {
        this.contactPrePassDurationSeconds = contactPrePassDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowEdges")
    public String[][] dataflowEdges;
    public GetMissionProfileResponse withDataflowEdges(String[][] dataflowEdges) {
        this.dataflowEdges = dataflowEdges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumViableContactDurationSeconds")
    public Long minimumViableContactDurationSeconds;
    public GetMissionProfileResponse withMinimumViableContactDurationSeconds(Long minimumViableContactDurationSeconds) {
        this.minimumViableContactDurationSeconds = minimumViableContactDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missionProfileArn")
    public String missionProfileArn;
    public GetMissionProfileResponse withMissionProfileArn(String missionProfileArn) {
        this.missionProfileArn = missionProfileArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missionProfileId")
    public String missionProfileId;
    public GetMissionProfileResponse withMissionProfileId(String missionProfileId) {
        this.missionProfileId = missionProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetMissionProfileResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public GetMissionProfileResponse withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public GetMissionProfileResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingConfigArn")
    public String trackingConfigArn;
    public GetMissionProfileResponse withTrackingConfigArn(String trackingConfigArn) {
        this.trackingConfigArn = trackingConfigArn;
        return this;
    }
}