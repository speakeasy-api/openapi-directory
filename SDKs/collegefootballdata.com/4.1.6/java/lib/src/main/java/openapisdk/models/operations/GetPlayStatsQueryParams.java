package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlayStatsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=athleteId")
    public Long athleteId;
    public GetPlayStatsQueryParams withAthleteId(Long athleteId) {
        this.athleteId = athleteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetPlayStatsQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gameId")
    public Long gameId;
    public GetPlayStatsQueryParams withGameId(Long gameId) {
        this.gameId = gameId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seasonType")
    public String seasonType;
    public GetPlayStatsQueryParams withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=statTypeId")
    public Long statTypeId;
    public GetPlayStatsQueryParams withStatTypeId(Long statTypeId) {
        this.statTypeId = statTypeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetPlayStatsQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=week")
    public Long week;
    public GetPlayStatsQueryParams withWeek(Long week) {
        this.week = week;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetPlayStatsQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}