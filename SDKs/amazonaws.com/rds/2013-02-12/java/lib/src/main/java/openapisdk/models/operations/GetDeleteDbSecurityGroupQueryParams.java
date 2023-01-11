package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDbSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDbSecurityGroupActionEnum action;
    public GetDeleteDbSecurityGroupQueryParams withAction(GetDeleteDbSecurityGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSecurityGroupName")
    public String dbSecurityGroupName;
    public GetDeleteDbSecurityGroupQueryParams withDbSecurityGroupName(String dbSecurityGroupName) {
        this.dbSecurityGroupName = dbSecurityGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDbSecurityGroupVersionEnum version;
    public GetDeleteDbSecurityGroupQueryParams withVersion(GetDeleteDbSecurityGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}