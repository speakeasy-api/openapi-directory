package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCloudFormationStackRequest {
    public CreateCloudFormationStackHeaders headers;
    public CreateCloudFormationStackRequest withHeaders(CreateCloudFormationStackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCloudFormationStackRequest request;
    public CreateCloudFormationStackRequest withRequest(openapisdk.models.shared.CreateCloudFormationStackRequest request) {
        this.request = request;
        return this;
    }
}