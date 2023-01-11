package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSoftwareUpdatesRequest {
    public GetSoftwareUpdatesHeaders headers;
    public GetSoftwareUpdatesRequest withHeaders(GetSoftwareUpdatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSoftwareUpdatesRequest request;
    public GetSoftwareUpdatesRequest withRequest(openapisdk.models.shared.GetSoftwareUpdatesRequest request) {
        this.request = request;
        return this;
    }
}