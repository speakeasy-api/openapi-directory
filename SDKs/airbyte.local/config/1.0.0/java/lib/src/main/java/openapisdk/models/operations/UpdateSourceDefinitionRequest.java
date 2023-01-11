package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSourceDefinitionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceDefinitionUpdate request;
    public UpdateSourceDefinitionRequest withRequest(openapisdk.models.shared.SourceDefinitionUpdate request) {
        this.request = request;
        return this;
    }
}