package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlayerSeasonStatsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String category;
    public GetPlayerSeasonStatsQueryParams withCategory(String category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetPlayerSeasonStatsQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endWeek")
    public Long endWeek;
    public GetPlayerSeasonStatsQueryParams withEndWeek(Long endWeek) {
        this.endWeek = endWeek;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seasonType")
    public String seasonType;
    public GetPlayerSeasonStatsQueryParams withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startWeek")
    public Long startWeek;
    public GetPlayerSeasonStatsQueryParams withStartWeek(Long startWeek) {
        this.startWeek = startWeek;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetPlayerSeasonStatsQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetPlayerSeasonStatsQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}