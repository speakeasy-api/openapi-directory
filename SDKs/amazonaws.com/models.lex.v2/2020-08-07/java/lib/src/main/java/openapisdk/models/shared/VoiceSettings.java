package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VoiceSettings
 * Defines settings for using an Amazon Polly voice to communicate with a user.
**/
public class VoiceSettings {
    @JsonProperty("voiceId")
    public String voiceId;
    public VoiceSettings withVoiceId(String voiceId) {
        this.voiceId = voiceId;
        return this;
    }
}