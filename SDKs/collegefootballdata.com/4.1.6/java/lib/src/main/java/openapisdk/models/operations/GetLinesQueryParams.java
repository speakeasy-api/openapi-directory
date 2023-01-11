package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLinesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=away")
    public String away;
    public GetLinesQueryParams withAway(String away) {
        this.away = away;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetLinesQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gameId")
    public Long gameId;
    public GetLinesQueryParams withGameId(Long gameId) {
        this.gameId = gameId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=home")
    public String home;
    public GetLinesQueryParams withHome(String home) {
        this.home = home;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seasonType")
    public String seasonType;
    public GetLinesQueryParams withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetLinesQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=week")
    public Long week;
    public GetLinesQueryParams withWeek(Long week) {
        this.week = week;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetLinesQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}