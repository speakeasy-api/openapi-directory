package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLunaClientsRequest {
    public ListLunaClientsHeaders headers;
    public ListLunaClientsRequest withHeaders(ListLunaClientsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListLunaClientsRequest request;
    public ListLunaClientsRequest withRequest(openapisdk.models.shared.ListLunaClientsRequest request) {
        this.request = request;
        return this;
    }
}