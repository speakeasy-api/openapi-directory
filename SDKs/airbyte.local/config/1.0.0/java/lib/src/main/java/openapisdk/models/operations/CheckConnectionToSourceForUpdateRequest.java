package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckConnectionToSourceForUpdateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceUpdate request;
    public CheckConnectionToSourceForUpdateRequest withRequest(openapisdk.models.shared.SourceUpdate request) {
        this.request = request;
        return this;
    }
}