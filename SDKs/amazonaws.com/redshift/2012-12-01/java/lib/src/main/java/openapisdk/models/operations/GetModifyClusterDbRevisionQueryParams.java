package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyClusterDbRevisionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyClusterDbRevisionActionEnum action;
    public GetModifyClusterDbRevisionQueryParams withAction(GetModifyClusterDbRevisionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetModifyClusterDbRevisionQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RevisionTarget")
    public String revisionTarget;
    public GetModifyClusterDbRevisionQueryParams withRevisionTarget(String revisionTarget) {
        this.revisionTarget = revisionTarget;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyClusterDbRevisionVersionEnum version;
    public GetModifyClusterDbRevisionQueryParams withVersion(GetModifyClusterDbRevisionVersionEnum version) {
        this.version = version;
        return this;
    }
}