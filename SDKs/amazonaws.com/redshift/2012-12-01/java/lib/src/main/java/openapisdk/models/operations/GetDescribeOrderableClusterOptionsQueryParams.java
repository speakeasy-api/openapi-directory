package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeOrderableClusterOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeOrderableClusterOptionsActionEnum action;
    public GetDescribeOrderableClusterOptionsQueryParams withAction(GetDescribeOrderableClusterOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterVersion")
    public String clusterVersion;
    public GetDescribeOrderableClusterOptionsQueryParams withClusterVersion(String clusterVersion) {
        this.clusterVersion = clusterVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeOrderableClusterOptionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeOrderableClusterOptionsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NodeType")
    public String nodeType;
    public GetDescribeOrderableClusterOptionsQueryParams withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeOrderableClusterOptionsVersionEnum version;
    public GetDescribeOrderableClusterOptionsQueryParams withVersion(GetDescribeOrderableClusterOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}