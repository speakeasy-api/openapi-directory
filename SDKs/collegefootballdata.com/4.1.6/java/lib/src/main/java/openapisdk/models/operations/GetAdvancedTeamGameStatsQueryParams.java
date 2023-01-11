package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdvancedTeamGameStatsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeGarbageTime")
    public Boolean excludeGarbageTime;
    public GetAdvancedTeamGameStatsQueryParams withExcludeGarbageTime(Boolean excludeGarbageTime) {
        this.excludeGarbageTime = excludeGarbageTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opponent")
    public String opponent;
    public GetAdvancedTeamGameStatsQueryParams withOpponent(String opponent) {
        this.opponent = opponent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seasonType")
    public String seasonType;
    public GetAdvancedTeamGameStatsQueryParams withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetAdvancedTeamGameStatsQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=week")
    public Long week;
    public GetAdvancedTeamGameStatsQueryParams withWeek(Long week) {
        this.week = week;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetAdvancedTeamGameStatsQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}