package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSourceDefinitionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceDefinitionCreate request;
    public CreateSourceDefinitionRequest withRequest(openapisdk.models.shared.SourceDefinitionCreate request) {
        this.request = request;
        return this;
    }
}