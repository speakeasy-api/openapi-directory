package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AudioLogSetting
 * Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
**/
public class AudioLogSetting {
    @JsonProperty("destination")
    public AudioLogDestination destination;
    public AudioLogSetting withDestination(AudioLogDestination destination) {
        this.destination = destination;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public AudioLogSetting withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}