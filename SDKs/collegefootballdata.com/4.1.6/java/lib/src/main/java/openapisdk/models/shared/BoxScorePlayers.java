package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoxScorePlayers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ppa")
    public BoxScorePlayersPpa[] ppa;
    public BoxScorePlayers withPpa(BoxScorePlayersPpa[] ppa) {
        this.ppa = ppa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public BoxScorePlayersUsage[] usage;
    public BoxScorePlayers withUsage(BoxScorePlayersUsage[] usage) {
        this.usage = usage;
        return this;
    }
}