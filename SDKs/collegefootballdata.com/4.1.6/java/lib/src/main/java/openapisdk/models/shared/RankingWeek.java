package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RankingWeek {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polls")
    public RankingWeekPolls[] polls;
    public RankingWeek withPolls(RankingWeekPolls[] polls) {
        this.polls = polls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public RankingWeek withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seasonType")
    public String seasonType;
    public RankingWeek withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("week")
    public Long week;
    public RankingWeek withWeek(Long week) {
        this.week = week;
        return this;
    }
}