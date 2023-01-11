package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamRecordsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetTeamRecordsQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetTeamRecordsQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetTeamRecordsQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}