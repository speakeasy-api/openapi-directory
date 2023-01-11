package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociationForServiceQuotaTemplateRequest {
    public GetAssociationForServiceQuotaTemplateHeaders headers;
    public GetAssociationForServiceQuotaTemplateRequest withHeaders(GetAssociationForServiceQuotaTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetAssociationForServiceQuotaTemplateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}