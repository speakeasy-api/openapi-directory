package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteClusterParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteClusterParameterGroupActionEnum action;
    public GetDeleteClusterParameterGroupQueryParams withAction(GetDeleteClusterParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ParameterGroupName")
    public String parameterGroupName;
    public GetDeleteClusterParameterGroupQueryParams withParameterGroupName(String parameterGroupName) {
        this.parameterGroupName = parameterGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteClusterParameterGroupVersionEnum version;
    public GetDeleteClusterParameterGroupQueryParams withVersion(GetDeleteClusterParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}