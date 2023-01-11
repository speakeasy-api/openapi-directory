package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRosterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetRosterQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetRosterQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}