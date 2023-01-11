package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBotLocaleRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateBotLocaleRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("localeId")
    public String localeId;
    public CreateBotLocaleRequestBody withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @JsonProperty("nluIntentConfidenceThreshold")
    public Double nluIntentConfidenceThreshold;
    public CreateBotLocaleRequestBody withNluIntentConfidenceThreshold(Double nluIntentConfidenceThreshold) {
        this.nluIntentConfidenceThreshold = nluIntentConfidenceThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceSettings")
    public CreateBotLocaleRequestBodyVoiceSettings voiceSettings;
    public CreateBotLocaleRequestBody withVoiceSettings(CreateBotLocaleRequestBodyVoiceSettings voiceSettings) {
        this.voiceSettings = voiceSettings;
        return this;
    }
}