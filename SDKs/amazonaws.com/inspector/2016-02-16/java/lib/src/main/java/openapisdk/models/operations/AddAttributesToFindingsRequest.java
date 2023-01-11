package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddAttributesToFindingsRequest {
    public AddAttributesToFindingsHeaders headers;
    public AddAttributesToFindingsRequest withHeaders(AddAttributesToFindingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddAttributesToFindingsRequest request;
    public AddAttributesToFindingsRequest withRequest(openapisdk.models.shared.AddAttributesToFindingsRequest request) {
        this.request = request;
        return this;
    }
}