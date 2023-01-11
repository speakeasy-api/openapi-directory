package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvokeEndpointPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=EndpointName")
    public String endpointName;
    public InvokeEndpointPathParams withEndpointName(String endpointName) {
        this.endpointName = endpointName;
        return this;
    }
}