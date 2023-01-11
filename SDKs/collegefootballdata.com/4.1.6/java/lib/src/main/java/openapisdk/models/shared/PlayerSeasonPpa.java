package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayerSeasonPpa {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averagePPA")
    public PlayerSeasonPpaAveragePpa averagePPA;
    public PlayerSeasonPpa withAveragePpa(PlayerSeasonPpaAveragePpa averagePPA) {
        this.averagePPA = averagePPA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference")
    public String conference;
    public PlayerSeasonPpa withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PlayerSeasonPpa withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PlayerSeasonPpa withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public String position;
    public PlayerSeasonPpa withPosition(String position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public PlayerSeasonPpa withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public PlayerSeasonPpa withTeam(String team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPPA")
    public PlayerSeasonPpaTotalPpa totalPPA;
    public PlayerSeasonPpa withTotalPpa(PlayerSeasonPpaTotalPpa totalPPA) {
        this.totalPPA = totalPPA;
        return this;
    }
}