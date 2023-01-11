package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeLoggingStatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeLoggingStatusActionEnum action;
    public GetDescribeLoggingStatusQueryParams withAction(GetDescribeLoggingStatusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetDescribeLoggingStatusQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeLoggingStatusVersionEnum version;
    public GetDescribeLoggingStatusQueryParams withVersion(GetDescribeLoggingStatusVersionEnum version) {
        this.version = version;
        return this;
    }
}