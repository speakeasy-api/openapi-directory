package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPauseClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPauseClusterActionEnum action;
    public GetPauseClusterQueryParams withAction(GetPauseClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetPauseClusterQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPauseClusterVersionEnum version;
    public GetPauseClusterQueryParams withVersion(GetPauseClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}