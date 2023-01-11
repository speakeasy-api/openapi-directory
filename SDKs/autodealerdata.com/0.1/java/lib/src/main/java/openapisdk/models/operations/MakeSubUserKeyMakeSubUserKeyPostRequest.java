package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MakeSubUserKeyMakeSubUserKeyPostRequest {
    public MakeSubUserKeyMakeSubUserKeyPostQueryParams queryParams;
    public MakeSubUserKeyMakeSubUserKeyPostRequest withQueryParams(MakeSubUserKeyMakeSubUserKeyPostQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EndpointList request;
    public MakeSubUserKeyMakeSubUserKeyPostRequest withRequest(openapisdk.models.shared.EndpointList request) {
        this.request = request;
        return this;
    }
}