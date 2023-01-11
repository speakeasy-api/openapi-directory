package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRankingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seasonType")
    public String seasonType;
    public GetRankingsQueryParams withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=week")
    public Long week;
    public GetRankingsQueryParams withWeek(Long week) {
        this.week = week;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetRankingsQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}