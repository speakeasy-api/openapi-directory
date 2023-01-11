package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatasetGroupsRequest {
    public ListDatasetGroupsQueryParams queryParams;
    public ListDatasetGroupsRequest withQueryParams(ListDatasetGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDatasetGroupsHeaders headers;
    public ListDatasetGroupsRequest withHeaders(ListDatasetGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDatasetGroupsRequest request;
    public ListDatasetGroupsRequest withRequest(openapisdk.models.shared.ListDatasetGroupsRequest request) {
        this.request = request;
        return this;
    }
}