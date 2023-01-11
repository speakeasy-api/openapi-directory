package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlaysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetPlaysQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=defense")
    public String defense;
    public GetPlaysQueryParams withDefense(String defense) {
        this.defense = defense;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=defenseConference")
    public String defenseConference;
    public GetPlaysQueryParams withDefenseConference(String defenseConference) {
        this.defenseConference = defenseConference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offense")
    public String offense;
    public GetPlaysQueryParams withOffense(String offense) {
        this.offense = offense;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offenseConference")
    public String offenseConference;
    public GetPlaysQueryParams withOffenseConference(String offenseConference) {
        this.offenseConference = offenseConference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=playType")
    public Long playType;
    public GetPlaysQueryParams withPlayType(Long playType) {
        this.playType = playType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=seasonType")
    public String seasonType;
    public GetPlaysQueryParams withSeasonType(String seasonType) {
        this.seasonType = seasonType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetPlaysQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=week")
    public Long week;
    public GetPlaysQueryParams withWeek(Long week) {
        this.week = week;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetPlaysQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}