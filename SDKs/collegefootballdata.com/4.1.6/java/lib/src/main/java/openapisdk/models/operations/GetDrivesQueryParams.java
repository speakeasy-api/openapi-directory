package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDrivesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetDrivesQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=defense")
    public String defense;
    public GetDrivesQueryParams withDefense(String defense) {
        this.defense = defense;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=defenseConference")
    public String defenseConference;
    public GetDrivesQueryParams withDefenseConference(String defenseConference) {
        this.defenseConference = defenseConference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offense")
    public String offense;
    public GetDrivesQueryParams withOffense(String offense) {
        this.offense = offense;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offenseConference")
    public String offenseConference;
    public GetDrivesQueryParams withOffenseConference(String offenseConference) {
        this.offenseConference = offenseConference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seasonType")
    public String seasonType;
    public GetDrivesQueryParams withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetDrivesQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=week")
    public Long week;
    public GetDrivesQueryParams withWeek(Long week) {
        this.week = week;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetDrivesQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}