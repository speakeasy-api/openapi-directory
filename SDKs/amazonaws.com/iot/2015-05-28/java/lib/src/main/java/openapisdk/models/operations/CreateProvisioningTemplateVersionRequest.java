package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProvisioningTemplateVersionRequest {
    public CreateProvisioningTemplateVersionPathParams pathParams;
    public CreateProvisioningTemplateVersionRequest withPathParams(CreateProvisioningTemplateVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateProvisioningTemplateVersionQueryParams queryParams;
    public CreateProvisioningTemplateVersionRequest withQueryParams(CreateProvisioningTemplateVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CreateProvisioningTemplateVersionHeaders headers;
    public CreateProvisioningTemplateVersionRequest withHeaders(CreateProvisioningTemplateVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateProvisioningTemplateVersionRequestBody request;
    public CreateProvisioningTemplateVersionRequest withRequest(CreateProvisioningTemplateVersionRequestBody request) {
        this.request = request;
        return this;
    }
}