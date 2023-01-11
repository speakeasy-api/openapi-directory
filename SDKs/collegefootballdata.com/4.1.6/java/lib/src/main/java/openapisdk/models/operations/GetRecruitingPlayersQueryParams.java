package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecruitingPlayersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classification")
    public String classification;
    public GetRecruitingPlayersQueryParams withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=position")
    public String position;
    public GetRecruitingPlayersQueryParams withPosition(String position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetRecruitingPlayersQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetRecruitingPlayersQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetRecruitingPlayersQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}