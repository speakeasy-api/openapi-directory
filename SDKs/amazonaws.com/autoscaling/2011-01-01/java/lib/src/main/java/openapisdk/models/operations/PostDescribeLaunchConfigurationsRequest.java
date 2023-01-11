package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLaunchConfigurationsRequest {
    public PostDescribeLaunchConfigurationsQueryParams queryParams;
    public PostDescribeLaunchConfigurationsRequest withQueryParams(PostDescribeLaunchConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLaunchConfigurationsHeaders headers;
    public PostDescribeLaunchConfigurationsRequest withHeaders(PostDescribeLaunchConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLaunchConfigurationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}