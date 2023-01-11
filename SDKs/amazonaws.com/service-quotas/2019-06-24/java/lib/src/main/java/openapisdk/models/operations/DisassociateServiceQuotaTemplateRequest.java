package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateServiceQuotaTemplateRequest {
    public DisassociateServiceQuotaTemplateHeaders headers;
    public DisassociateServiceQuotaTemplateRequest withHeaders(DisassociateServiceQuotaTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DisassociateServiceQuotaTemplateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}