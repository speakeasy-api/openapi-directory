package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInstanceProfilesRequest {
    public ListInstanceProfilesHeaders headers;
    public ListInstanceProfilesRequest withHeaders(ListInstanceProfilesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListInstanceProfilesRequest request;
    public ListInstanceProfilesRequest withRequest(openapisdk.models.shared.ListInstanceProfilesRequest request) {
        this.request = request;
        return this;
    }
}