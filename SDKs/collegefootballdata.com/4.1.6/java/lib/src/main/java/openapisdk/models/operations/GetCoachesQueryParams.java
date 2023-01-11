package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCoachesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=firstName")
    public String firstName;
    public GetCoachesQueryParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lastName")
    public String lastName;
    public GetCoachesQueryParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxYear")
    public Long maxYear;
    public GetCoachesQueryParams withMaxYear(Long maxYear) {
        this.maxYear = maxYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minYear")
    public Long minYear;
    public GetCoachesQueryParams withMinYear(Long minYear) {
        this.minYear = minYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetCoachesQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetCoachesQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}