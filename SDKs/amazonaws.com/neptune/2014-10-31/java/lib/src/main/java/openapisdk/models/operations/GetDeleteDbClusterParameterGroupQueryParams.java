package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDbClusterParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDbClusterParameterGroupActionEnum action;
    public GetDeleteDbClusterParameterGroupQueryParams withAction(GetDeleteDbClusterParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterParameterGroupName")
    public String dbClusterParameterGroupName;
    public GetDeleteDbClusterParameterGroupQueryParams withDbClusterParameterGroupName(String dbClusterParameterGroupName) {
        this.dbClusterParameterGroupName = dbClusterParameterGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDbClusterParameterGroupVersionEnum version;
    public GetDeleteDbClusterParameterGroupQueryParams withVersion(GetDeleteDbClusterParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}