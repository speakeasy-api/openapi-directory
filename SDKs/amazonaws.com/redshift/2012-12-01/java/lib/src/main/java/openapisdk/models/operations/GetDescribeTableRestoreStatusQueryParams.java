package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeTableRestoreStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeTableRestoreStatusActionEnum action;
    public GetDescribeTableRestoreStatusQueryParams withAction(GetDescribeTableRestoreStatusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetDescribeTableRestoreStatusQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeTableRestoreStatusQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeTableRestoreStatusQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TableRestoreRequestId")
    public String tableRestoreRequestId;
    public GetDescribeTableRestoreStatusQueryParams withTableRestoreRequestId(String tableRestoreRequestId) {
        this.tableRestoreRequestId = tableRestoreRequestId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeTableRestoreStatusVersionEnum version;
    public GetDescribeTableRestoreStatusQueryParams withVersion(GetDescribeTableRestoreStatusVersionEnum version) {
        this.version = version;
        return this;
    }
}