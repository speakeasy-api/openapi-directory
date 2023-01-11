package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamSpRating {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference")
    public String conference;
    public TeamSpRating withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defense")
    public TeamSpRatingDefense defense;
    public TeamSpRating withDefense(TeamSpRatingDefense defense) {
        this.defense = defense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offense")
    public TeamSpRatingOffense offense;
    public TeamSpRating withOffense(TeamSpRatingOffense offense) {
        this.offense = offense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranking")
    public Double ranking;
    public TeamSpRating withRanking(Double ranking) {
        this.ranking = ranking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Double rating;
    public TeamSpRating withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondOrderWins")
    public Double secondOrderWins;
    public TeamSpRating withSecondOrderWins(Double secondOrderWins) {
        this.secondOrderWins = secondOrderWins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sos")
    public Double sos;
    public TeamSpRating withSos(Double sos) {
        this.sos = sos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialTeams")
    public TeamSpRatingSpecialTeams specialTeams;
    public TeamSpRating withSpecialTeams(TeamSpRatingSpecialTeams specialTeams) {
        this.specialTeams = specialTeams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public TeamSpRating withTeam(String team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public TeamSpRating withYear(Long year) {
        this.year = year;
        return this;
    }
}