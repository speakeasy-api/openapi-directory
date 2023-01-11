package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlayerGamePpaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeGarbageTime")
    public Boolean excludeGarbageTime;
    public GetPlayerGamePpaQueryParams withExcludeGarbageTime(Boolean excludeGarbageTime) {
        this.excludeGarbageTime = excludeGarbageTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=playerId")
    public Long playerId;
    public GetPlayerGamePpaQueryParams withPlayerId(Long playerId) {
        this.playerId = playerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=position")
    public String position;
    public GetPlayerGamePpaQueryParams withPosition(String position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seasonType")
    public String seasonType;
    public GetPlayerGamePpaQueryParams withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetPlayerGamePpaQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=threshold")
    public String threshold;
    public GetPlayerGamePpaQueryParams withThreshold(String threshold) {
        this.threshold = threshold;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=week")
    public Long week;
    public GetPlayerGamePpaQueryParams withWeek(Long week) {
        this.week = week;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetPlayerGamePpaQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}