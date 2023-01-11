package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIdentitiesRequest {
    public ListIdentitiesHeaders headers;
    public ListIdentitiesRequest withHeaders(ListIdentitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListIdentitiesInput request;
    public ListIdentitiesRequest withRequest(openapisdk.models.shared.ListIdentitiesInput request) {
        this.request = request;
        return this;
    }
}