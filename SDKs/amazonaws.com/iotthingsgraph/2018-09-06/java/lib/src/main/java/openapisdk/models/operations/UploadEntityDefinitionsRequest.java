package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadEntityDefinitionsRequest {
    public UploadEntityDefinitionsHeaders headers;
    public UploadEntityDefinitionsRequest withHeaders(UploadEntityDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UploadEntityDefinitionsRequest request;
    public UploadEntityDefinitionsRequest withRequest(openapisdk.models.shared.UploadEntityDefinitionsRequest request) {
        this.request = request;
        return this;
    }
}