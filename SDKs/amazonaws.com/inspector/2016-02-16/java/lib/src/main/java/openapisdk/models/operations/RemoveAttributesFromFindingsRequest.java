package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAttributesFromFindingsRequest {
    public RemoveAttributesFromFindingsHeaders headers;
    public RemoveAttributesFromFindingsRequest withHeaders(RemoveAttributesFromFindingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveAttributesFromFindingsRequest request;
    public RemoveAttributesFromFindingsRequest withRequest(openapisdk.models.shared.RemoveAttributesFromFindingsRequest request) {
        this.request = request;
        return this;
    }
}