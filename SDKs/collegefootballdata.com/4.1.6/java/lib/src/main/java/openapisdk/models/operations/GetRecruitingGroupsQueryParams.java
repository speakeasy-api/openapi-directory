package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecruitingGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetRecruitingGroupsQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endYear")
    public Long endYear;
    public GetRecruitingGroupsQueryParams withEndYear(Long endYear) {
        this.endYear = endYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startYear")
    public Long startYear;
    public GetRecruitingGroupsQueryParams withStartYear(Long startYear) {
        this.startYear = startYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetRecruitingGroupsQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
}