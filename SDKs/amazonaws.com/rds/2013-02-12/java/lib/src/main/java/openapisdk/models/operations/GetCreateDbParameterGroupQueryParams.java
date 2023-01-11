package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateDbParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateDbParameterGroupActionEnum action;
    public GetCreateDbParameterGroupQueryParams withAction(GetCreateDbParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBParameterGroupFamily")
    public String dbParameterGroupFamily;
    public GetCreateDbParameterGroupQueryParams withDbParameterGroupFamily(String dbParameterGroupFamily) {
        this.dbParameterGroupFamily = dbParameterGroupFamily;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBParameterGroupName")
    public String dbParameterGroupName;
    public GetCreateDbParameterGroupQueryParams withDbParameterGroupName(String dbParameterGroupName) {
        this.dbParameterGroupName = dbParameterGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetCreateDbParameterGroupQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateDbParameterGroupVersionEnum version;
    public GetCreateDbParameterGroupQueryParams withVersion(GetCreateDbParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}