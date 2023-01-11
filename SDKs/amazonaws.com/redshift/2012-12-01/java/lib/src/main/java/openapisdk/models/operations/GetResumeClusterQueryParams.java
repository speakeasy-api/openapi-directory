package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResumeClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetResumeClusterActionEnum action;
    public GetResumeClusterQueryParams withAction(GetResumeClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetResumeClusterQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetResumeClusterVersionEnum version;
    public GetResumeClusterQueryParams withVersion(GetResumeClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}