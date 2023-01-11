package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifySpotFleetRequestRequest {
    public PostModifySpotFleetRequestQueryParams queryParams;
    public PostModifySpotFleetRequestRequest withQueryParams(PostModifySpotFleetRequestQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifySpotFleetRequestHeaders headers;
    public PostModifySpotFleetRequestRequest withHeaders(PostModifySpotFleetRequestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifySpotFleetRequestRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}