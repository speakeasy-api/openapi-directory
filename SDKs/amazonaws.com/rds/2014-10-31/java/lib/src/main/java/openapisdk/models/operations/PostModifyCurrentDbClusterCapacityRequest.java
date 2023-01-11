package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyCurrentDbClusterCapacityRequest {
    public PostModifyCurrentDbClusterCapacityQueryParams queryParams;
    public PostModifyCurrentDbClusterCapacityRequest withQueryParams(PostModifyCurrentDbClusterCapacityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyCurrentDbClusterCapacityHeaders headers;
    public PostModifyCurrentDbClusterCapacityRequest withHeaders(PostModifyCurrentDbClusterCapacityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyCurrentDbClusterCapacityRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}