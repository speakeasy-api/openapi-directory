package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListS3ResourcesRequest {
    public ListS3ResourcesQueryParams queryParams;
    public ListS3ResourcesRequest withQueryParams(ListS3ResourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListS3ResourcesHeaders headers;
    public ListS3ResourcesRequest withHeaders(ListS3ResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListS3ResourcesRequest request;
    public ListS3ResourcesRequest withRequest(openapisdk.models.shared.ListS3ResourcesRequest request) {
        this.request = request;
        return this;
    }
}