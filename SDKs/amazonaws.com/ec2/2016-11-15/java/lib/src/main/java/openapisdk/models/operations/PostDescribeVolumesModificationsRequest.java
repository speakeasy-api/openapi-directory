package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVolumesModificationsRequest {
    public PostDescribeVolumesModificationsQueryParams queryParams;
    public PostDescribeVolumesModificationsRequest withQueryParams(PostDescribeVolumesModificationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVolumesModificationsHeaders headers;
    public PostDescribeVolumesModificationsRequest withHeaders(PostDescribeVolumesModificationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVolumesModificationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}