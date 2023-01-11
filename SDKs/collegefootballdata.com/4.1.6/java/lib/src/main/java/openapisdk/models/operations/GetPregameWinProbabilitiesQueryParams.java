package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPregameWinProbabilitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seasonType")
    public String seasonType;
    public GetPregameWinProbabilitiesQueryParams withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetPregameWinProbabilitiesQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=week")
    public Long week;
    public GetPregameWinProbabilitiesQueryParams withWeek(Long week) {
        this.week = week;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetPregameWinProbabilitiesQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}