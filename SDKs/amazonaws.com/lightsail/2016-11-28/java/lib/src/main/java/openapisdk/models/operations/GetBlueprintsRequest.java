package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlueprintsRequest {
    public GetBlueprintsHeaders headers;
    public GetBlueprintsRequest withHeaders(GetBlueprintsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBlueprintsRequest request;
    public GetBlueprintsRequest withRequest(openapisdk.models.shared.GetBlueprintsRequest request) {
        this.request = request;
        return this;
    }
}