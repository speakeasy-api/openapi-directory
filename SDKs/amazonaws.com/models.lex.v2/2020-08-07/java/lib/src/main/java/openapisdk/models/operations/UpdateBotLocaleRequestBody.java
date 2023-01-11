package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBotLocaleRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateBotLocaleRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("nluIntentConfidenceThreshold")
    public Double nluIntentConfidenceThreshold;
    public UpdateBotLocaleRequestBody withNluIntentConfidenceThreshold(Double nluIntentConfidenceThreshold) {
        this.nluIntentConfidenceThreshold = nluIntentConfidenceThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceSettings")
    public UpdateBotLocaleRequestBodyVoiceSettings voiceSettings;
    public UpdateBotLocaleRequestBody withVoiceSettings(UpdateBotLocaleRequestBodyVoiceSettings voiceSettings) {
        this.voiceSettings = voiceSettings;
        return this;
    }
}