package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationalDatabaseBundlesRequest {
    public GetRelationalDatabaseBundlesHeaders headers;
    public GetRelationalDatabaseBundlesRequest withHeaders(GetRelationalDatabaseBundlesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRelationalDatabaseBundlesRequest request;
    public GetRelationalDatabaseBundlesRequest withRequest(openapisdk.models.shared.GetRelationalDatabaseBundlesRequest request) {
        this.request = request;
        return this;
    }
}