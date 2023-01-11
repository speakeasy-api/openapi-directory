package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBotAliasRequestBodyConversationLogSettings
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
public class UpdateBotAliasRequestBodyConversationLogSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioLogSettings")
    public openapisdk.models.shared.AudioLogSetting[] audioLogSettings;
    public UpdateBotAliasRequestBodyConversationLogSettings withAudioLogSettings(openapisdk.models.shared.AudioLogSetting[] audioLogSettings) {
        this.audioLogSettings = audioLogSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textLogSettings")
    public openapisdk.models.shared.TextLogSetting[] textLogSettings;
    public UpdateBotAliasRequestBodyConversationLogSettings withTextLogSettings(openapisdk.models.shared.TextLogSetting[] textLogSettings) {
        this.textLogSettings = textLogSettings;
        return this;
    }
}