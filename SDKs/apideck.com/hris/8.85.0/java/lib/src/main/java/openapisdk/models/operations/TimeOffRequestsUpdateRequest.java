package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TimeOffRequestsUpdateRequest {
    public TimeOffRequestsUpdatePathParams pathParams;
    public TimeOffRequestsUpdateRequest withPathParams(TimeOffRequestsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TimeOffRequestsUpdateQueryParams queryParams;
    public TimeOffRequestsUpdateRequest withQueryParams(TimeOffRequestsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TimeOffRequestsUpdateHeaders headers;
    public TimeOffRequestsUpdateRequest withHeaders(TimeOffRequestsUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TimeOffRequestInput request;
    public TimeOffRequestsUpdateRequest withRequest(openapisdk.models.shared.TimeOffRequestInput request) {
        this.request = request;
        return this;
    }
    public TimeOffRequestsUpdateSecurity security;
    public TimeOffRequestsUpdateRequest withSecurity(TimeOffRequestsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}