package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfigureAutomaticTransitionsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfigureAutomaticTransitionRequest request;
    public ConfigureAutomaticTransitionsRequest withRequest(openapisdk.models.shared.ConfigureAutomaticTransitionRequest request) {
        this.request = request;
        return this;
    }
}