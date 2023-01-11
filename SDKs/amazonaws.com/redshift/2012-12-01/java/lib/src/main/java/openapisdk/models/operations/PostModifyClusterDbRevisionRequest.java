package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterDbRevisionRequest {
    public PostModifyClusterDbRevisionQueryParams queryParams;
    public PostModifyClusterDbRevisionRequest withQueryParams(PostModifyClusterDbRevisionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyClusterDbRevisionHeaders headers;
    public PostModifyClusterDbRevisionRequest withHeaders(PostModifyClusterDbRevisionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyClusterDbRevisionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}