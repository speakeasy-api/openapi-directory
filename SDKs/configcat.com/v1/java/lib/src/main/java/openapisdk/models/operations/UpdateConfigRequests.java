package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConfigRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.UpdateConfigRequest updateConfigRequest;
    public UpdateConfigRequests withUpdateConfigRequest(openapisdk.models.shared.UpdateConfigRequest updateConfigRequest) {
        this.updateConfigRequest = updateConfigRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateConfigRequest updateConfigRequest1;
    public UpdateConfigRequests withUpdateConfigRequest1(openapisdk.models.shared.UpdateConfigRequest updateConfigRequest1) {
        this.updateConfigRequest1 = updateConfigRequest1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.UpdateConfigRequest updateConfigRequest2;
    public UpdateConfigRequests withUpdateConfigRequest2(openapisdk.models.shared.UpdateConfigRequest updateConfigRequest2) {
        this.updateConfigRequest2 = updateConfigRequest2;
        return this;
    }
}