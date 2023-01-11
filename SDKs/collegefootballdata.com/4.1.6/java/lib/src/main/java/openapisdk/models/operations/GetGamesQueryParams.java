package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGamesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=away")
    public String away;
    public GetGamesQueryParams withAway(String away) {
        this.away = away;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetGamesQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=home")
    public String home;
    public GetGamesQueryParams withHome(String home) {
        this.home = home;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public Long id;
    public GetGamesQueryParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seasonType")
    public String seasonType;
    public GetGamesQueryParams withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetGamesQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=week")
    public Long week;
    public GetGamesQueryParams withWeek(Long week) {
        this.week = week;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetGamesQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}