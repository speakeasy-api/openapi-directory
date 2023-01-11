package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeadsUpdateRequest {
    public LeadsUpdatePathParams pathParams;
    public LeadsUpdateRequest withPathParams(LeadsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LeadsUpdateQueryParams queryParams;
    public LeadsUpdateRequest withQueryParams(LeadsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LeadsUpdateHeaders headers;
    public LeadsUpdateRequest withHeaders(LeadsUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LeadInput request;
    public LeadsUpdateRequest withRequest(openapisdk.models.shared.LeadInput request) {
        this.request = request;
        return this;
    }
    public LeadsUpdateSecurity security;
    public LeadsUpdateRequest withSecurity(LeadsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}