package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamSrsRating {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference")
    public String conference;
    public TeamSrsRating withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("division")
    public String division;
    public TeamSrsRating withDivision(String division) {
        this.division = division;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranking")
    public Double ranking;
    public TeamSrsRating withRanking(Double ranking) {
        this.ranking = ranking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Double rating;
    public TeamSrsRating withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public TeamSrsRating withTeam(String team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public TeamSrsRating withYear(Long year) {
        this.year = year;
        return this;
    }
}