package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDbProxyEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDbProxyEndpointActionEnum action;
    public GetDeleteDbProxyEndpointQueryParams withAction(GetDeleteDbProxyEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBProxyEndpointName")
    public String dbProxyEndpointName;
    public GetDeleteDbProxyEndpointQueryParams withDbProxyEndpointName(String dbProxyEndpointName) {
        this.dbProxyEndpointName = dbProxyEndpointName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDbProxyEndpointVersionEnum version;
    public GetDeleteDbProxyEndpointQueryParams withVersion(GetDeleteDbProxyEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}