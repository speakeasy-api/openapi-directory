package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddApplicationVpcConfigurationRequest {
    public AddApplicationVpcConfigurationHeaders headers;
    public AddApplicationVpcConfigurationRequest withHeaders(AddApplicationVpcConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddApplicationVpcConfigurationRequest request;
    public AddApplicationVpcConfigurationRequest withRequest(openapisdk.models.shared.AddApplicationVpcConfigurationRequest request) {
        this.request = request;
        return this;
    }
}