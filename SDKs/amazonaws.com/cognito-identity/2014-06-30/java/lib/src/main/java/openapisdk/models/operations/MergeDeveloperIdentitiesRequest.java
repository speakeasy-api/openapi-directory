package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MergeDeveloperIdentitiesRequest {
    public MergeDeveloperIdentitiesHeaders headers;
    public MergeDeveloperIdentitiesRequest withHeaders(MergeDeveloperIdentitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MergeDeveloperIdentitiesInput request;
    public MergeDeveloperIdentitiesRequest withRequest(openapisdk.models.shared.MergeDeveloperIdentitiesInput request) {
        this.request = request;
        return this;
    }
}