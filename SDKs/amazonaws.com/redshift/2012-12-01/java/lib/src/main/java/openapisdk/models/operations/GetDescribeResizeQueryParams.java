package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeResizeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeResizeActionEnum action;
    public GetDescribeResizeQueryParams withAction(GetDescribeResizeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetDescribeResizeQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeResizeVersionEnum version;
    public GetDescribeResizeQueryParams withVersion(GetDescribeResizeVersionEnum version) {
        this.version = version;
        return this;
    }
}