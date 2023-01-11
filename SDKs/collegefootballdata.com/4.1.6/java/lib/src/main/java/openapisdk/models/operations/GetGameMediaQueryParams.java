package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGameMediaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetGameMediaQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mediaType")
    public String mediaType;
    public GetGameMediaQueryParams withMediaType(String mediaType) {
        this.mediaType = mediaType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seasonType")
    public String seasonType;
    public GetGameMediaQueryParams withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetGameMediaQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=week")
    public Long week;
    public GetGameMediaQueryParams withWeek(Long week) {
        this.week = week;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetGameMediaQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}