package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEndpointPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public GetEndpointPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=endpoint-id")
    public String endpointId;
    public GetEndpointPathParams withEndpointId(String endpointId) {
        this.endpointId = endpointId;
        return this;
    }
}