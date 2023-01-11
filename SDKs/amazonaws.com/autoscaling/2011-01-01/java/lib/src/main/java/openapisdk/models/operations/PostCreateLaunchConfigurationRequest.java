package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLaunchConfigurationRequest {
    public PostCreateLaunchConfigurationQueryParams queryParams;
    public PostCreateLaunchConfigurationRequest withQueryParams(PostCreateLaunchConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateLaunchConfigurationHeaders headers;
    public PostCreateLaunchConfigurationRequest withHeaders(PostCreateLaunchConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateLaunchConfigurationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}