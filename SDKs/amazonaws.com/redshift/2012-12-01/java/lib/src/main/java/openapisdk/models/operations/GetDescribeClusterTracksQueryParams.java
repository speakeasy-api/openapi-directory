package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeClusterTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeClusterTracksActionEnum action;
    public GetDescribeClusterTracksQueryParams withAction(GetDescribeClusterTracksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaintenanceTrackName")
    public String maintenanceTrackName;
    public GetDescribeClusterTracksQueryParams withMaintenanceTrackName(String maintenanceTrackName) {
        this.maintenanceTrackName = maintenanceTrackName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeClusterTracksQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeClusterTracksQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeClusterTracksVersionEnum version;
    public GetDescribeClusterTracksQueryParams withVersion(GetDescribeClusterTracksVersionEnum version) {
        this.version = version;
        return this;
    }
}