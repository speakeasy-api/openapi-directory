package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSourceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceCreate request;
    public CreateSourceRequest withRequest(openapisdk.models.shared.SourceCreate request) {
        this.request = request;
        return this;
    }
}