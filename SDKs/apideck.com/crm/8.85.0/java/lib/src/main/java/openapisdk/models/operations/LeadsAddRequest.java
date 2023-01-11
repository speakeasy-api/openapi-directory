package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeadsAddRequest {
    public LeadsAddQueryParams queryParams;
    public LeadsAddRequest withQueryParams(LeadsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LeadsAddHeaders headers;
    public LeadsAddRequest withHeaders(LeadsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LeadInput request;
    public LeadsAddRequest withRequest(openapisdk.models.shared.LeadInput request) {
        this.request = request;
        return this;
    }
    public LeadsAddSecurity security;
    public LeadsAddRequest withSecurity(LeadsAddSecurity security) {
        this.security = security;
        return this;
    }
}