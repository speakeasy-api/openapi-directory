package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeVolumesRequest {
    public DescribeVolumesHeaders headers;
    public DescribeVolumesRequest withHeaders(DescribeVolumesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeVolumesRequest request;
    public DescribeVolumesRequest withRequest(openapisdk.models.shared.DescribeVolumesRequest request) {
        this.request = request;
        return this;
    }
}