package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisableSnapshotCopyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisableSnapshotCopyActionEnum action;
    public GetDisableSnapshotCopyQueryParams withAction(GetDisableSnapshotCopyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetDisableSnapshotCopyQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisableSnapshotCopyVersionEnum version;
    public GetDisableSnapshotCopyQueryParams withVersion(GetDisableSnapshotCopyVersionEnum version) {
        this.version = version;
        return this;
    }
}