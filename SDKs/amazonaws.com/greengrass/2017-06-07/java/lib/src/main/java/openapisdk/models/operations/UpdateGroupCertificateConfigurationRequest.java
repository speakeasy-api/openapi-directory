package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGroupCertificateConfigurationRequest {
    public UpdateGroupCertificateConfigurationPathParams pathParams;
    public UpdateGroupCertificateConfigurationRequest withPathParams(UpdateGroupCertificateConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateGroupCertificateConfigurationHeaders headers;
    public UpdateGroupCertificateConfigurationRequest withHeaders(UpdateGroupCertificateConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateGroupCertificateConfigurationRequestBody request;
    public UpdateGroupCertificateConfigurationRequest withRequest(UpdateGroupCertificateConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}