package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDraftPicksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=college")
    public String college;
    public GetDraftPicksQueryParams withCollege(String college) {
        this.college = college;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetDraftPicksQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nflTeam")
    public String nflTeam;
    public GetDraftPicksQueryParams withNflTeam(String nflTeam) {
        this.nflTeam = nflTeam;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=position")
    public String position;
    public GetDraftPicksQueryParams withPosition(String position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetDraftPicksQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}