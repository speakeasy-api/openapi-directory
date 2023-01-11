package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInstanceAccessControlAttributeConfigurationRequest {
    public CreateInstanceAccessControlAttributeConfigurationHeaders headers;
    public CreateInstanceAccessControlAttributeConfigurationRequest withHeaders(CreateInstanceAccessControlAttributeConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateInstanceAccessControlAttributeConfigurationRequest request;
    public CreateInstanceAccessControlAttributeConfigurationRequest withRequest(openapisdk.models.shared.CreateInstanceAccessControlAttributeConfigurationRequest request) {
        this.request = request;
        return this;
    }
}