package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRebootClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRebootClusterActionEnum action;
    public GetRebootClusterQueryParams withAction(GetRebootClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetRebootClusterQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRebootClusterVersionEnum version;
    public GetRebootClusterQueryParams withVersion(GetRebootClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}