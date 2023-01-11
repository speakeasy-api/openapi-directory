package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayWp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("away")
    public String away;
    public PlayWp withAway(String away) {
        this.away = away;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awayId")
    public Long awayId;
    public PlayWp withAwayId(Long awayId) {
        this.awayId = awayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awayScore")
    public Long awayScore;
    public PlayWp withAwayScore(Long awayScore) {
        this.awayScore = awayScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Long distance;
    public PlayWp withDistance(Long distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("down")
    public Long down;
    public PlayWp withDown(Long down) {
        this.down = down;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gamesId")
    public Long gamesId;
    public PlayWp withGamesId(Long gamesId) {
        this.gamesId = gamesId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home")
    public String home;
    public PlayWp withHome(String home) {
        this.home = home;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeBall")
    public Boolean homeBall;
    public PlayWp withHomeBall(Boolean homeBall) {
        this.homeBall = homeBall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeId")
    public Long homeId;
    public PlayWp withHomeId(Long homeId) {
        this.homeId = homeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeScore")
    public Long homeScore;
    public PlayWp withHomeScore(Long homeScore) {
        this.homeScore = homeScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("homeWinProb")
    public Double homeWinProb;
    public PlayWp withHomeWinProb(Double homeWinProb) {
        this.homeWinProb = homeWinProb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playId")
    public Long playId;
    public PlayWp withPlayId(Long playId) {
        this.playId = playId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playNumber")
    public Long playNumber;
    public PlayWp withPlayNumber(Long playNumber) {
        this.playNumber = playNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playText")
    public String playText;
    public PlayWp withPlayText(String playText) {
        this.playText = playText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spread")
    public Double spread;
    public PlayWp withSpread(Double spread) {
        this.spread = spread;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeRemaining")
    public Long timeRemaining;
    public PlayWp withTimeRemaining(Long timeRemaining) {
        this.timeRemaining = timeRemaining;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yardLine")
    public Long yardLine;
    public PlayWp withYardLine(Long yardLine) {
        this.yardLine = yardLine;
        return this;
    }
}