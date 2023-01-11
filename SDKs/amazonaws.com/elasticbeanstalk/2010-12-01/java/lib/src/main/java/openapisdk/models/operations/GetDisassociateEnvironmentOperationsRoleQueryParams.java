package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisassociateEnvironmentOperationsRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisassociateEnvironmentOperationsRoleActionEnum action;
    public GetDisassociateEnvironmentOperationsRoleQueryParams withAction(GetDisassociateEnvironmentOperationsRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetDisassociateEnvironmentOperationsRoleQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisassociateEnvironmentOperationsRoleVersionEnum version;
    public GetDisassociateEnvironmentOperationsRoleQueryParams withVersion(GetDisassociateEnvironmentOperationsRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}