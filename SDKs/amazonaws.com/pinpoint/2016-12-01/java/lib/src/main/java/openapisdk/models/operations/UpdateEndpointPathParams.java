package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEndpointPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public UpdateEndpointPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=endpoint-id")
    public String endpointId;
    public UpdateEndpointPathParams withEndpointId(String endpointId) {
        this.endpointId = endpointId;
        return this;
    }
}