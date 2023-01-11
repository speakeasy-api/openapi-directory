package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDbClusterEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDbClusterEndpointActionEnum action;
    public GetDeleteDbClusterEndpointQueryParams withAction(GetDeleteDbClusterEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterEndpointIdentifier")
    public String dbClusterEndpointIdentifier;
    public GetDeleteDbClusterEndpointQueryParams withDbClusterEndpointIdentifier(String dbClusterEndpointIdentifier) {
        this.dbClusterEndpointIdentifier = dbClusterEndpointIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDbClusterEndpointVersionEnum version;
    public GetDeleteDbClusterEndpointQueryParams withVersion(GetDeleteDbClusterEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}