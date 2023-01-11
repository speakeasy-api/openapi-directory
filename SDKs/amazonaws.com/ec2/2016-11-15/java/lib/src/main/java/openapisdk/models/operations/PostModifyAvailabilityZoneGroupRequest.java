package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyAvailabilityZoneGroupRequest {
    public PostModifyAvailabilityZoneGroupQueryParams queryParams;
    public PostModifyAvailabilityZoneGroupRequest withQueryParams(PostModifyAvailabilityZoneGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyAvailabilityZoneGroupHeaders headers;
    public PostModifyAvailabilityZoneGroupRequest withHeaders(PostModifyAvailabilityZoneGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyAvailabilityZoneGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}