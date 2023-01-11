package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProvisioningTemplateRequest {
    public CreateProvisioningTemplateHeaders headers;
    public CreateProvisioningTemplateRequest withHeaders(CreateProvisioningTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateProvisioningTemplateRequestBody request;
    public CreateProvisioningTemplateRequest withRequest(CreateProvisioningTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}