package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConfigRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CreateConfigRequest createConfigRequest;
    public CreateConfigRequests withCreateConfigRequest(openapisdk.models.shared.CreateConfigRequest createConfigRequest) {
        this.createConfigRequest = createConfigRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateConfigRequest createConfigRequest1;
    public CreateConfigRequests withCreateConfigRequest1(openapisdk.models.shared.CreateConfigRequest createConfigRequest1) {
        this.createConfigRequest1 = createConfigRequest1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CreateConfigRequest createConfigRequest2;
    public CreateConfigRequests withCreateConfigRequest2(openapisdk.models.shared.CreateConfigRequest createConfigRequest2) {
        this.createConfigRequest2 = createConfigRequest2;
        return this;
    }
}