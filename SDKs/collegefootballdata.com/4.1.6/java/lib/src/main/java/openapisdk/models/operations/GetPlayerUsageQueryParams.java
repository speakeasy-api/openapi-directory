package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlayerUsageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetPlayerUsageQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=excludeGarbageTime")
    public Boolean excludeGarbageTime;
    public GetPlayerUsageQueryParams withExcludeGarbageTime(Boolean excludeGarbageTime) {
        this.excludeGarbageTime = excludeGarbageTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=playerId")
    public Long playerId;
    public GetPlayerUsageQueryParams withPlayerId(Long playerId) {
        this.playerId = playerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=position")
    public String position;
    public GetPlayerUsageQueryParams withPosition(String position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=team")
    public String team;
    public GetPlayerUsageQueryParams withTeam(String team) {
        this.team = team;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetPlayerUsageQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}