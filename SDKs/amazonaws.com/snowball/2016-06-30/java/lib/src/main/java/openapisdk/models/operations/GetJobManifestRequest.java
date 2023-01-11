package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobManifestRequest {
    public GetJobManifestHeaders headers;
    public GetJobManifestRequest withHeaders(GetJobManifestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetJobManifestRequest request;
    public GetJobManifestRequest withRequest(openapisdk.models.shared.GetJobManifestRequest request) {
        this.request = request;
        return this;
    }
}