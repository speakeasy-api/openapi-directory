package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebAcLsRequest {
    public ListWebAcLsHeaders headers;
    public ListWebAcLsRequest withHeaders(ListWebAcLsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListWebAcLsRequest request;
    public ListWebAcLsRequest withRequest(openapisdk.models.shared.ListWebAcLsRequest request) {
        this.request = request;
        return this;
    }
}