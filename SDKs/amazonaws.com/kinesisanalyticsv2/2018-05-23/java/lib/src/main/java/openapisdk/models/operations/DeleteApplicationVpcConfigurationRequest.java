package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApplicationVpcConfigurationRequest {
    public DeleteApplicationVpcConfigurationHeaders headers;
    public DeleteApplicationVpcConfigurationRequest withHeaders(DeleteApplicationVpcConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteApplicationVpcConfigurationRequest request;
    public DeleteApplicationVpcConfigurationRequest withRequest(openapisdk.models.shared.DeleteApplicationVpcConfigurationRequest request) {
        this.request = request;
        return this;
    }
}