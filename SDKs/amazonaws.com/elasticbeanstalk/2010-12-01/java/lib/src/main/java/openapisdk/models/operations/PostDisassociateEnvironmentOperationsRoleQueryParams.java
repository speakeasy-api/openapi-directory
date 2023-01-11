package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateEnvironmentOperationsRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateEnvironmentOperationsRoleActionEnum action;
    public PostDisassociateEnvironmentOperationsRoleQueryParams withAction(PostDisassociateEnvironmentOperationsRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateEnvironmentOperationsRoleVersionEnum version;
    public PostDisassociateEnvironmentOperationsRoleQueryParams withVersion(PostDisassociateEnvironmentOperationsRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}