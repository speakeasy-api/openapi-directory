package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociateEnvironmentOperationsRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAssociateEnvironmentOperationsRoleActionEnum action;
    public GetAssociateEnvironmentOperationsRoleQueryParams withAction(GetAssociateEnvironmentOperationsRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetAssociateEnvironmentOperationsRoleQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OperationsRole")
    public String operationsRole;
    public GetAssociateEnvironmentOperationsRoleQueryParams withOperationsRole(String operationsRole) {
        this.operationsRole = operationsRole;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAssociateEnvironmentOperationsRoleVersionEnum version;
    public GetAssociateEnvironmentOperationsRoleQueryParams withVersion(GetAssociateEnvironmentOperationsRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}