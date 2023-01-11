package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateEnvironmentOperationsRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateEnvironmentOperationsRoleActionEnum action;
    public PostAssociateEnvironmentOperationsRoleQueryParams withAction(PostAssociateEnvironmentOperationsRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateEnvironmentOperationsRoleVersionEnum version;
    public PostAssociateEnvironmentOperationsRoleQueryParams withVersion(PostAssociateEnvironmentOperationsRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}