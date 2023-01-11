package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteEndpointAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteEndpointAccessActionEnum action;
    public GetDeleteEndpointAccessQueryParams withAction(GetDeleteEndpointAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndpointName")
    public String endpointName;
    public GetDeleteEndpointAccessQueryParams withEndpointName(String endpointName) {
        this.endpointName = endpointName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteEndpointAccessVersionEnum version;
    public GetDeleteEndpointAccessQueryParams withVersion(GetDeleteEndpointAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}