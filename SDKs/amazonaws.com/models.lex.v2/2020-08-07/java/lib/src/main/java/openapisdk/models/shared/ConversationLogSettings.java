package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConversationLogSettings
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
public class ConversationLogSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioLogSettings")
    public AudioLogSetting[] audioLogSettings;
    public ConversationLogSettings withAudioLogSettings(AudioLogSetting[] audioLogSettings) {
        this.audioLogSettings = audioLogSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textLogSettings")
    public TextLogSetting[] textLogSettings;
    public ConversationLogSettings withTextLogSettings(TextLogSetting[] textLogSettings) {
        this.textLogSettings = textLogSettings;
        return this;
    }
}