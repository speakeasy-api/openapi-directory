package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePlacementGroupsRequest {
    public PostDescribePlacementGroupsQueryParams queryParams;
    public PostDescribePlacementGroupsRequest withQueryParams(PostDescribePlacementGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribePlacementGroupsHeaders headers;
    public PostDescribePlacementGroupsRequest withHeaders(PostDescribePlacementGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribePlacementGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}