package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInstanceAccessControlAttributeConfigurationRequest {
    public DeleteInstanceAccessControlAttributeConfigurationHeaders headers;
    public DeleteInstanceAccessControlAttributeConfigurationRequest withHeaders(DeleteInstanceAccessControlAttributeConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteInstanceAccessControlAttributeConfigurationRequest request;
    public DeleteInstanceAccessControlAttributeConfigurationRequest withRequest(openapisdk.models.shared.DeleteInstanceAccessControlAttributeConfigurationRequest request) {
        this.request = request;
        return this;
    }
}