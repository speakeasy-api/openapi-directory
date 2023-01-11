package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLaunchConfigurationRequest {
    public PostDeleteLaunchConfigurationQueryParams queryParams;
    public PostDeleteLaunchConfigurationRequest withQueryParams(PostDeleteLaunchConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteLaunchConfigurationHeaders headers;
    public PostDeleteLaunchConfigurationRequest withHeaders(PostDeleteLaunchConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteLaunchConfigurationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}