package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGameWeatherQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetGameWeatherQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seasonType")
    public String seasonType;
    public GetGameWeatherQueryParams withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetGameWeatherQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=week")
    public Long week;
    public GetGameWeatherQueryParams withWeek(Long week) {
        this.week = week;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetGameWeatherQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}