package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectModerationLabelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HumanLoopActivationOutput")
    public HumanLoopActivationOutput humanLoopActivationOutput;
    public DetectModerationLabelsResponse withHumanLoopActivationOutput(HumanLoopActivationOutput humanLoopActivationOutput) {
        this.humanLoopActivationOutput = humanLoopActivationOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModerationLabels")
    public ModerationLabel[] moderationLabels;
    public DetectModerationLabelsResponse withModerationLabels(ModerationLabel[] moderationLabels) {
        this.moderationLabels = moderationLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModerationModelVersion")
    public String moderationModelVersion;
    public DetectModerationLabelsResponse withModerationModelVersion(String moderationModelVersion) {
        this.moderationModelVersion = moderationModelVersion;
        return this;
    }
}