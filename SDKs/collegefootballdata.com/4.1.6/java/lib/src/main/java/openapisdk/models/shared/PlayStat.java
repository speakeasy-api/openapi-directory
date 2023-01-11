package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlayStat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("athleteId")
    public Long athleteId;
    public PlayStat withAthleteId(Long athleteId) {
        this.athleteId = athleteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("athleteName")
    public String athleteName;
    public PlayStat withAthleteName(String athleteName) {
        this.athleteName = athleteName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clock")
    public PlayStatClock clock;
    public PlayStat withClock(PlayStatClock clock) {
        this.clock = clock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference")
    public String conference;
    public PlayStat withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Long distance;
    public PlayStat withDistance(Long distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("down")
    public Long down;
    public PlayStat withDown(Long down) {
        this.down = down;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveId")
    public Long driveId;
    public PlayStat withDriveId(Long driveId) {
        this.driveId = driveId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gameId")
    public Long gameId;
    public PlayStat withGameId(Long gameId) {
        this.gameId = gameId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opponent")
    public String opponent;
    public PlayStat withOpponent(String opponent) {
        this.opponent = opponent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opponentScore")
    public Long opponentScore;
    public PlayStat withOpponentScore(Long opponentScore) {
        this.opponentScore = opponentScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public Long period;
    public PlayStat withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playId")
    public Long playId;
    public PlayStat withPlayId(Long playId) {
        this.playId = playId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public PlayStat withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stat")
    public Long stat;
    public PlayStat withStat(Long stat) {
        this.stat = stat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statType")
    public String statType;
    public PlayStat withStatType(String statType) {
        this.statType = statType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public PlayStat withTeam(String team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teamScore")
    public Long teamScore;
    public PlayStat withTeamScore(Long teamScore) {
        this.teamScore = teamScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("week")
    public Long week;
    public PlayStat withWeek(Long week) {
        this.week = week;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yardsToGoal")
    public Long yardsToGoal;
    public PlayStat withYardsToGoal(Long yardsToGoal) {
        this.yardsToGoal = yardsToGoal;
        return this;
    }
}