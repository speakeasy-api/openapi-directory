package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReturningProduction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference")
    public String conference;
    public ReturningProduction withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passingUsage")
    public Double passingUsage;
    public ReturningProduction withPassingUsage(Double passingUsage) {
        this.passingUsage = passingUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentPPA")
    public Double percentPPA;
    public ReturningProduction withPercentPpa(Double percentPPA) {
        this.percentPPA = percentPPA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentPassingPPA")
    public Double percentPassingPPA;
    public ReturningProduction withPercentPassingPpa(Double percentPassingPPA) {
        this.percentPassingPPA = percentPassingPPA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentReceivingPPA")
    public Double percentReceivingPPA;
    public ReturningProduction withPercentReceivingPpa(Double percentReceivingPPA) {
        this.percentReceivingPPA = percentReceivingPPA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentRushingPPA")
    public Double percentRushingPPA;
    public ReturningProduction withPercentRushingPpa(Double percentRushingPPA) {
        this.percentRushingPPA = percentRushingPPA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receivingUsage")
    public Double receivingUsage;
    public ReturningProduction withReceivingUsage(Double receivingUsage) {
        this.receivingUsage = receivingUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rushingUsage")
    public Double rushingUsage;
    public ReturningProduction withRushingUsage(Double rushingUsage) {
        this.rushingUsage = rushingUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public Long season;
    public ReturningProduction withSeason(Long season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public ReturningProduction withTeam(String team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPPA")
    public Double totalPPA;
    public ReturningProduction withTotalPpa(Double totalPPA) {
        this.totalPPA = totalPPA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPassingPPA")
    public Double totalPassingPPA;
    public ReturningProduction withTotalPassingPpa(Double totalPassingPPA) {
        this.totalPassingPPA = totalPassingPPA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalReceivingPPA")
    public Double totalReceivingPPA;
    public ReturningProduction withTotalReceivingPpa(Double totalReceivingPPA) {
        this.totalReceivingPPA = totalReceivingPPA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalRushingPPA")
    public Double totalRushingPPA;
    public ReturningProduction withTotalRushingPpa(Double totalRushingPPA) {
        this.totalRushingPPA = totalRushingPPA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public Double usage;
    public ReturningProduction withUsage(Double usage) {
        this.usage = usage;
        return this;
    }
}