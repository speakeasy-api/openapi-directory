package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListContainersRequest {
    public ListContainersQueryParams queryParams;
    public ListContainersRequest withQueryParams(ListContainersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListContainersHeaders headers;
    public ListContainersRequest withHeaders(ListContainersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListContainersInput request;
    public ListContainersRequest withRequest(openapisdk.models.shared.ListContainersInput request) {
        this.request = request;
        return this;
    }
}