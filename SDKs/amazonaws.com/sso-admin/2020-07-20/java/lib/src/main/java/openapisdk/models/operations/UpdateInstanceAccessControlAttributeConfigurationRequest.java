package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInstanceAccessControlAttributeConfigurationRequest {
    public UpdateInstanceAccessControlAttributeConfigurationHeaders headers;
    public UpdateInstanceAccessControlAttributeConfigurationRequest withHeaders(UpdateInstanceAccessControlAttributeConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateInstanceAccessControlAttributeConfigurationRequest request;
    public UpdateInstanceAccessControlAttributeConfigurationRequest withRequest(openapisdk.models.shared.UpdateInstanceAccessControlAttributeConfigurationRequest request) {
        this.request = request;
        return this;
    }
}