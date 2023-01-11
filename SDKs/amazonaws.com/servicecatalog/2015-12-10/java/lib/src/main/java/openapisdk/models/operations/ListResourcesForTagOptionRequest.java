package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourcesForTagOptionRequest {
    public ListResourcesForTagOptionQueryParams queryParams;
    public ListResourcesForTagOptionRequest withQueryParams(ListResourcesForTagOptionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResourcesForTagOptionHeaders headers;
    public ListResourcesForTagOptionRequest withHeaders(ListResourcesForTagOptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListResourcesForTagOptionInput request;
    public ListResourcesForTagOptionRequest withRequest(openapisdk.models.shared.ListResourcesForTagOptionInput request) {
        this.request = request;
        return this;
    }
}