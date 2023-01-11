package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeSpotFleetRequestHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeSpotFleetRequestHistoryActionEnum action;
    public GetDescribeSpotFleetRequestHistoryQueryParams withAction(GetDescribeSpotFleetRequestHistoryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDescribeSpotFleetRequestHistoryQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EventType")
    public GetDescribeSpotFleetRequestHistoryEventTypeEnum eventType;
    public GetDescribeSpotFleetRequestHistoryQueryParams withEventType(GetDescribeSpotFleetRequestHistoryEventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public GetDescribeSpotFleetRequestHistoryQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeSpotFleetRequestHistoryQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SpotFleetRequestId")
    public String spotFleetRequestId;
    public GetDescribeSpotFleetRequestHistoryQueryParams withSpotFleetRequestId(String spotFleetRequestId) {
        this.spotFleetRequestId = spotFleetRequestId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartTime")
    public OffsetDateTime startTime;
    public GetDescribeSpotFleetRequestHistoryQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeSpotFleetRequestHistoryVersionEnum version;
    public GetDescribeSpotFleetRequestHistoryQueryParams withVersion(GetDescribeSpotFleetRequestHistoryVersionEnum version) {
        this.version = version;
        return this;
    }
}