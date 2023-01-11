package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReloadTablesRequest {
    public ReloadTablesHeaders headers;
    public ReloadTablesRequest withHeaders(ReloadTablesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReloadTablesMessage request;
    public ReloadTablesRequest withRequest(openapisdk.models.shared.ReloadTablesMessage request) {
        this.request = request;
        return this;
    }
}