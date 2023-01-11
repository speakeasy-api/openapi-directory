package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamSeasonStatsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetTeamSeasonStatsQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endWeek")
    public Long endWeek;
    public GetTeamSeasonStatsQueryParams withEndWeek(Long endWeek) {
        this.endWeek = endWeek;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startWeek")
    public Long startWeek;
    public GetTeamSeasonStatsQueryParams withStartWeek(Long startWeek) {
        this.startWeek = startWeek;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetTeamSeasonStatsQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetTeamSeasonStatsQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}