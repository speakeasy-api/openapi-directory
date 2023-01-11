package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyReservedInstancesRequest {
    public PostModifyReservedInstancesQueryParams queryParams;
    public PostModifyReservedInstancesRequest withQueryParams(PostModifyReservedInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyReservedInstancesHeaders headers;
    public PostModifyReservedInstancesRequest withHeaders(PostModifyReservedInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyReservedInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}