package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CoachSeasons {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("games")
    public Long games;
    public CoachSeasons withGames(Long games) {
        this.games = games;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("losses")
    public Long losses;
    public CoachSeasons withLosses(Long losses) {
        this.losses = losses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postseason_rank")
    public Long postseasonRank;
    public CoachSeasons withPostseasonRank(Long postseasonRank) {
        this.postseasonRank = postseasonRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preseason_rank")
    public Long preseasonRank;
    public CoachSeasons withPreseasonRank(Long preseasonRank) {
        this.preseasonRank = preseasonRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("school")
    public String school;
    public CoachSeasons withSchool(String school) {
        this.school = school;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sp_defense")
    public Double spDefense;
    public CoachSeasons withSpDefense(Double spDefense) {
        this.spDefense = spDefense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sp_offense")
    public Double spOffense;
    public CoachSeasons withSpOffense(Double spOffense) {
        this.spOffense = spOffense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sp_overall")
    public Double spOverall;
    public CoachSeasons withSpOverall(Double spOverall) {
        this.spOverall = spOverall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srs")
    public Double srs;
    public CoachSeasons withSrs(Double srs) {
        this.srs = srs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ties")
    public Long ties;
    public CoachSeasons withTies(Long ties) {
        this.ties = ties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wins")
    public Long wins;
    public CoachSeasons withWins(Long wins) {
        this.wins = wins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public String year;
    public CoachSeasons withYear(String year) {
        this.year = year;
        return this;
    }
}