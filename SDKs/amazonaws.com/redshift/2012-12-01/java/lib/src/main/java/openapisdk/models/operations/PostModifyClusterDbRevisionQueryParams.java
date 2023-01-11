package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterDbRevisionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyClusterDbRevisionActionEnum action;
    public PostModifyClusterDbRevisionQueryParams withAction(PostModifyClusterDbRevisionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyClusterDbRevisionVersionEnum version;
    public PostModifyClusterDbRevisionQueryParams withVersion(PostModifyClusterDbRevisionVersionEnum version) {
        this.version = version;
        return this;
    }
}