package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModelSettings
 * The object used to call your custom language model to your transcription job.
**/
public class ModelSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageModelName")
    public String languageModelName;
    public ModelSettings withLanguageModelName(String languageModelName) {
        this.languageModelName = languageModelName;
        return this;
    }
}