package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMissionProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactPostPassDurationSeconds")
    public Long contactPostPassDurationSeconds;
    public CreateMissionProfileRequestBody withContactPostPassDurationSeconds(Long contactPostPassDurationSeconds) {
        this.contactPostPassDurationSeconds = contactPostPassDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactPrePassDurationSeconds")
    public Long contactPrePassDurationSeconds;
    public CreateMissionProfileRequestBody withContactPrePassDurationSeconds(Long contactPrePassDurationSeconds) {
        this.contactPrePassDurationSeconds = contactPrePassDurationSeconds;
        return this;
    }
    @JsonProperty("dataflowEdges")
    public String[][] dataflowEdges;
    public CreateMissionProfileRequestBody withDataflowEdges(String[][] dataflowEdges) {
        this.dataflowEdges = dataflowEdges;
        return this;
    }
    @JsonProperty("minimumViableContactDurationSeconds")
    public Long minimumViableContactDurationSeconds;
    public CreateMissionProfileRequestBody withMinimumViableContactDurationSeconds(Long minimumViableContactDurationSeconds) {
        this.minimumViableContactDurationSeconds = minimumViableContactDurationSeconds;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateMissionProfileRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateMissionProfileRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("trackingConfigArn")
    public String trackingConfigArn;
    public CreateMissionProfileRequestBody withTrackingConfigArn(String trackingConfigArn) {
        this.trackingConfigArn = trackingConfigArn;
        return this;
    }
}