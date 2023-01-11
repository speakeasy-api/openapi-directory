package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMissionProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactPostPassDurationSeconds")
    public Long contactPostPassDurationSeconds;
    public UpdateMissionProfileRequestBody withContactPostPassDurationSeconds(Long contactPostPassDurationSeconds) {
        this.contactPostPassDurationSeconds = contactPostPassDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactPrePassDurationSeconds")
    public Long contactPrePassDurationSeconds;
    public UpdateMissionProfileRequestBody withContactPrePassDurationSeconds(Long contactPrePassDurationSeconds) {
        this.contactPrePassDurationSeconds = contactPrePassDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowEdges")
    public String[][] dataflowEdges;
    public UpdateMissionProfileRequestBody withDataflowEdges(String[][] dataflowEdges) {
        this.dataflowEdges = dataflowEdges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumViableContactDurationSeconds")
    public Long minimumViableContactDurationSeconds;
    public UpdateMissionProfileRequestBody withMinimumViableContactDurationSeconds(Long minimumViableContactDurationSeconds) {
        this.minimumViableContactDurationSeconds = minimumViableContactDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateMissionProfileRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingConfigArn")
    public String trackingConfigArn;
    public UpdateMissionProfileRequestBody withTrackingConfigArn(String trackingConfigArn) {
        this.trackingConfigArn = trackingConfigArn;
        return this;
    }
}