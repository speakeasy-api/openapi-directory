package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdvancedTeamSeasonStatsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endWeek")
    public Long endWeek;
    public GetAdvancedTeamSeasonStatsQueryParams withEndWeek(Long endWeek) {
        this.endWeek = endWeek;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeGarbageTime")
    public Boolean excludeGarbageTime;
    public GetAdvancedTeamSeasonStatsQueryParams withExcludeGarbageTime(Boolean excludeGarbageTime) {
        this.excludeGarbageTime = excludeGarbageTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startWeek")
    public Long startWeek;
    public GetAdvancedTeamSeasonStatsQueryParams withStartWeek(Long startWeek) {
        this.startWeek = startWeek;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetAdvancedTeamSeasonStatsQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetAdvancedTeamSeasonStatsQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}