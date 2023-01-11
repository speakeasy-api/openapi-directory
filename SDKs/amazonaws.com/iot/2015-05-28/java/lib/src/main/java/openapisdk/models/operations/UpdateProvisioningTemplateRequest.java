package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProvisioningTemplateRequest {
    public UpdateProvisioningTemplatePathParams pathParams;
    public UpdateProvisioningTemplateRequest withPathParams(UpdateProvisioningTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateProvisioningTemplateHeaders headers;
    public UpdateProvisioningTemplateRequest withHeaders(UpdateProvisioningTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateProvisioningTemplateRequestBody request;
    public UpdateProvisioningTemplateRequest withRequest(UpdateProvisioningTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}