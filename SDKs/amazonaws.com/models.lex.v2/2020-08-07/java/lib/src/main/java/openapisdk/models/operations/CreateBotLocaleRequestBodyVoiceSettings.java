package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBotLocaleRequestBodyVoiceSettings
 * Defines settings for using an Amazon Polly voice to communicate with a user.
**/
public class CreateBotLocaleRequestBodyVoiceSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voiceId")
    public String voiceId;
    public CreateBotLocaleRequestBodyVoiceSettings withVoiceId(String voiceId) {
        this.voiceId = voiceId;
        return this;
    }
}