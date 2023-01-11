package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterIamRolesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyClusterIamRolesActionEnum action;
    public PostModifyClusterIamRolesQueryParams withAction(PostModifyClusterIamRolesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyClusterIamRolesVersionEnum version;
    public PostModifyClusterIamRolesQueryParams withVersion(PostModifyClusterIamRolesVersionEnum version) {
        this.version = version;
        return this;
    }
}