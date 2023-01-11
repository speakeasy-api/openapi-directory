package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSrsRatingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetSrsRatingsQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetSrsRatingsQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetSrsRatingsQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}