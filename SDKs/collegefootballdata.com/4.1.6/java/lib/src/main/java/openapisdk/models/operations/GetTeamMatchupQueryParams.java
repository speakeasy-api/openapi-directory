package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamMatchupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxYear")
    public Long maxYear;
    public GetTeamMatchupQueryParams withMaxYear(Long maxYear) {
        this.maxYear = maxYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minYear")
    public Long minYear;
    public GetTeamMatchupQueryParams withMinYear(Long minYear) {
        this.minYear = minYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team1")
    public String team1;
    public GetTeamMatchupQueryParams withTeam1(String team1) {
        this.team1 = team1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team2")
    public String team2;
    public GetTeamMatchupQueryParams withTeam2(String team2) {
        this.team2 = team2;
        return this;
    }
}