package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlayerSeasonPpaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetPlayerSeasonPpaQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeGarbageTime")
    public Boolean excludeGarbageTime;
    public GetPlayerSeasonPpaQueryParams withExcludeGarbageTime(Boolean excludeGarbageTime) {
        this.excludeGarbageTime = excludeGarbageTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=playerId")
    public Long playerId;
    public GetPlayerSeasonPpaQueryParams withPlayerId(Long playerId) {
        this.playerId = playerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=position")
    public String position;
    public GetPlayerSeasonPpaQueryParams withPosition(String position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetPlayerSeasonPpaQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=threshold")
    public String threshold;
    public GetPlayerSeasonPpaQueryParams withThreshold(String threshold) {
        this.threshold = threshold;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetPlayerSeasonPpaQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}