package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCancelResizeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCancelResizeActionEnum action;
    public GetCancelResizeQueryParams withAction(GetCancelResizeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetCancelResizeQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCancelResizeVersionEnum version;
    public GetCancelResizeQueryParams withVersion(GetCancelResizeVersionEnum version) {
        this.version = version;
        return this;
    }
}