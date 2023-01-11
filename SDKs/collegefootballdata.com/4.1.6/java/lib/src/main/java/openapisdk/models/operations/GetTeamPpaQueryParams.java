package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamPpaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetTeamPpaQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeGarbageTime")
    public Boolean excludeGarbageTime;
    public GetTeamPpaQueryParams withExcludeGarbageTime(Boolean excludeGarbageTime) {
        this.excludeGarbageTime = excludeGarbageTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetTeamPpaQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetTeamPpaQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}