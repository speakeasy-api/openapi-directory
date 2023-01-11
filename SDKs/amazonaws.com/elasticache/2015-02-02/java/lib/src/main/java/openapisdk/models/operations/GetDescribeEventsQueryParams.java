package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeEventsActionEnum action;
    public GetDescribeEventsQueryParams withAction(GetDescribeEventsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Duration")
    public Long duration;
    public GetDescribeEventsQueryParams withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndTime")
    public OffsetDateTime endTime;
    public GetDescribeEventsQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeEventsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeEventsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceIdentifier")
    public String sourceIdentifier;
    public GetDescribeEventsQueryParams withSourceIdentifier(String sourceIdentifier) {
        this.sourceIdentifier = sourceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceType")
    public GetDescribeEventsSourceTypeEnum sourceType;
    public GetDescribeEventsQueryParams withSourceType(GetDescribeEventsSourceTypeEnum sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartTime")
    public OffsetDateTime startTime;
    public GetDescribeEventsQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeEventsVersionEnum version;
    public GetDescribeEventsQueryParams withVersion(GetDescribeEventsVersionEnum version) {
        this.version = version;
        return this;
    }
}