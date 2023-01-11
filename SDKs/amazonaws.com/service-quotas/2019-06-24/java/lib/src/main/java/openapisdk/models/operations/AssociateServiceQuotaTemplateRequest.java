package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateServiceQuotaTemplateRequest {
    public AssociateServiceQuotaTemplateHeaders headers;
    public AssociateServiceQuotaTemplateRequest withHeaders(AssociateServiceQuotaTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AssociateServiceQuotaTemplateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}