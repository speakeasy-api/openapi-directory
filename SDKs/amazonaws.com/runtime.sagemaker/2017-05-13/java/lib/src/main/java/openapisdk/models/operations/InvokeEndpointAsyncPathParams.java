package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvokeEndpointAsyncPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EndpointName")
    public String endpointName;
    public InvokeEndpointAsyncPathParams withEndpointName(String endpointName) {
        this.endpointName = endpointName;
        return this;
    }
}