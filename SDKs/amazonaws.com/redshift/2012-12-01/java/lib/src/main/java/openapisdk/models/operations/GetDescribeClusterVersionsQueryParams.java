package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeClusterVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeClusterVersionsActionEnum action;
    public GetDescribeClusterVersionsQueryParams withAction(GetDescribeClusterVersionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterParameterGroupFamily")
    public String clusterParameterGroupFamily;
    public GetDescribeClusterVersionsQueryParams withClusterParameterGroupFamily(String clusterParameterGroupFamily) {
        this.clusterParameterGroupFamily = clusterParameterGroupFamily;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterVersion")
    public String clusterVersion;
    public GetDescribeClusterVersionsQueryParams withClusterVersion(String clusterVersion) {
        this.clusterVersion = clusterVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeClusterVersionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeClusterVersionsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeClusterVersionsVersionEnum version;
    public GetDescribeClusterVersionsQueryParams withVersion(GetDescribeClusterVersionsVersionEnum version) {
        this.version = version;
        return this;
    }
}