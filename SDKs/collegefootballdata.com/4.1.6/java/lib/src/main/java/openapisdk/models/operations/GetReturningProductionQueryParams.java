package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReturningProductionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetReturningProductionQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetReturningProductionQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetReturningProductionQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}