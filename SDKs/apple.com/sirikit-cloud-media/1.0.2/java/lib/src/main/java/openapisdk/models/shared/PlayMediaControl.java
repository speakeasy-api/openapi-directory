package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayMediaControl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity")
    public PlayMediaControlActivity activity;
    public PlayMediaControl withActivity(PlayMediaControlActivity activity) {
        this.activity = activity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commands")
    public PlayMediaControlCommandSet commands;
    public PlayMediaControl withCommands(PlayMediaControlCommandSet commands) {
        this.commands = commands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheme")
    public PlayMediaControlSchemeEnum scheme;
    public PlayMediaControl withScheme(PlayMediaControlSchemeEnum scheme) {
        this.scheme = scheme;
        return this;
    }
}