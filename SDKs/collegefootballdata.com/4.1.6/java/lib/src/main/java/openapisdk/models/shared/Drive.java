package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Drive {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defense")
    public String defense;
    public Drive withDefense(String defense) {
        this.defense = defense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defense_conference")
    public String defenseConference;
    public Drive withDefenseConference(String defenseConference) {
        this.defenseConference = defenseConference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drive_number")
    public Long driveNumber;
    public Drive withDriveNumber(Long driveNumber) {
        this.driveNumber = driveNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drive_result")
    public String driveResult;
    public Drive withDriveResult(String driveResult) {
        this.driveResult = driveResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_defense_score")
    public Long endDefenseScore;
    public Drive withEndDefenseScore(Long endDefenseScore) {
        this.endDefenseScore = endDefenseScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_offense_score")
    public Long endOffenseScore;
    public Drive withEndOffenseScore(Long endOffenseScore) {
        this.endOffenseScore = endOffenseScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_period")
    public Long endPeriod;
    public Drive withEndPeriod(Long endPeriod) {
        this.endPeriod = endPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_time")
    public DriveEndTime endTime;
    public Drive withEndTime(DriveEndTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_yardline")
    public Long endYardline;
    public Drive withEndYardline(Long endYardline) {
        this.endYardline = endYardline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_yards_to_goal")
    public Long endYardsToGoal;
    public Drive withEndYardsToGoal(Long endYardsToGoal) {
        this.endYardsToGoal = endYardsToGoal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("game_id")
    public Long gameId;
    public Drive withGameId(Long gameId) {
        this.gameId = gameId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Drive withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_home_offense")
    public Boolean isHomeOffense;
    public Drive withIsHomeOffense(Boolean isHomeOffense) {
        this.isHomeOffense = isHomeOffense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offense")
    public String offense;
    public Drive withOffense(String offense) {
        this.offense = offense;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offense_conference")
    public String offenseConference;
    public Drive withOffenseConference(String offenseConference) {
        this.offenseConference = offenseConference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plays")
    public Long plays;
    public Drive withPlays(Long plays) {
        this.plays = plays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoring")
    public Boolean scoring;
    public Drive withScoring(Boolean scoring) {
        this.scoring = scoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_defense_score")
    public Long startDefenseScore;
    public Drive withStartDefenseScore(Long startDefenseScore) {
        this.startDefenseScore = startDefenseScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_offense_score")
    public Long startOffenseScore;
    public Drive withStartOffenseScore(Long startOffenseScore) {
        this.startOffenseScore = startOffenseScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_period")
    public Long startPeriod;
    public Drive withStartPeriod(Long startPeriod) {
        this.startPeriod = startPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public DriveStartTime startTime;
    public Drive withStartTime(DriveStartTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_yardline")
    public Long startYardline;
    public Drive withStartYardline(Long startYardline) {
        this.startYardline = startYardline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_yards_to_goal")
    public Long startYardsToGoal;
    public Drive withStartYardsToGoal(Long startYardsToGoal) {
        this.startYardsToGoal = startYardsToGoal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yards")
    public Long yards;
    public Drive withYards(Long yards) {
        this.yards = yards;
        return this;
    }
}