package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSourceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceUpdate request;
    public UpdateSourceRequest withRequest(openapisdk.models.shared.SourceUpdate request) {
        this.request = request;
        return this;
    }
}