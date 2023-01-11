package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateDbSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateDbSecurityGroupActionEnum action;
    public GetCreateDbSecurityGroupQueryParams withAction(GetCreateDbSecurityGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSecurityGroupDescription")
    public String dbSecurityGroupDescription;
    public GetCreateDbSecurityGroupQueryParams withDbSecurityGroupDescription(String dbSecurityGroupDescription) {
        this.dbSecurityGroupDescription = dbSecurityGroupDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSecurityGroupName")
    public String dbSecurityGroupName;
    public GetCreateDbSecurityGroupQueryParams withDbSecurityGroupName(String dbSecurityGroupName) {
        this.dbSecurityGroupName = dbSecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateDbSecurityGroupVersionEnum version;
    public GetCreateDbSecurityGroupQueryParams withVersion(GetCreateDbSecurityGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}