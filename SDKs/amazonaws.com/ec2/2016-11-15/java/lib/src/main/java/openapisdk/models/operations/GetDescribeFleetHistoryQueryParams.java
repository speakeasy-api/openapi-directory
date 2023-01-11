package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeFleetHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeFleetHistoryActionEnum action;
    public GetDescribeFleetHistoryQueryParams withAction(GetDescribeFleetHistoryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDescribeFleetHistoryQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EventType")
    public GetDescribeFleetHistoryEventTypeEnum eventType;
    public GetDescribeFleetHistoryQueryParams withEventType(GetDescribeFleetHistoryEventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FleetId")
    public String fleetId;
    public GetDescribeFleetHistoryQueryParams withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public GetDescribeFleetHistoryQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeFleetHistoryQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartTime")
    public OffsetDateTime startTime;
    public GetDescribeFleetHistoryQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeFleetHistoryVersionEnum version;
    public GetDescribeFleetHistoryQueryParams withVersion(GetDescribeFleetHistoryVersionEnum version) {
        this.version = version;
        return this;
    }
}