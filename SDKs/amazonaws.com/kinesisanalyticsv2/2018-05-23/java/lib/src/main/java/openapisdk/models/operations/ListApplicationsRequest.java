package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApplicationsRequest {
    public ListApplicationsHeaders headers;
    public ListApplicationsRequest withHeaders(ListApplicationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListApplicationsRequest request;
    public ListApplicationsRequest withRequest(openapisdk.models.shared.ListApplicationsRequest request) {
        this.request = request;
        return this;
    }
}