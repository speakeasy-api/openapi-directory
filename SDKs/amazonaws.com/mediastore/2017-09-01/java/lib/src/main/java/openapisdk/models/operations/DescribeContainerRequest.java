package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeContainerRequest {
    public DescribeContainerHeaders headers;
    public DescribeContainerRequest withHeaders(DescribeContainerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeContainerInput request;
    public DescribeContainerRequest withRequest(openapisdk.models.shared.DescribeContainerInput request) {
        this.request = request;
        return this;
    }
}