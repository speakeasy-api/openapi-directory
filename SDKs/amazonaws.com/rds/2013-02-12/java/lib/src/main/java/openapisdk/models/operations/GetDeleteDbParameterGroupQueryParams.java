package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDbParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDbParameterGroupActionEnum action;
    public GetDeleteDbParameterGroupQueryParams withAction(GetDeleteDbParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBParameterGroupName")
    public String dbParameterGroupName;
    public GetDeleteDbParameterGroupQueryParams withDbParameterGroupName(String dbParameterGroupName) {
        this.dbParameterGroupName = dbParameterGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDbParameterGroupVersionEnum version;
    public GetDeleteDbParameterGroupQueryParams withVersion(GetDeleteDbParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}