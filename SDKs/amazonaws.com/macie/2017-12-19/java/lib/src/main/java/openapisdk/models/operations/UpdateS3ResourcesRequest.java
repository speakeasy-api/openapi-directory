package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateS3ResourcesRequest {
    public UpdateS3ResourcesHeaders headers;
    public UpdateS3ResourcesRequest withHeaders(UpdateS3ResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateS3ResourcesRequest request;
    public UpdateS3ResourcesRequest withRequest(openapisdk.models.shared.UpdateS3ResourcesRequest request) {
        this.request = request;
        return this;
    }
}