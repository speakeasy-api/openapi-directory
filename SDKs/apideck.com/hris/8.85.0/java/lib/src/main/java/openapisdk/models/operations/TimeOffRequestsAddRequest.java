package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TimeOffRequestsAddRequest {
    public TimeOffRequestsAddQueryParams queryParams;
    public TimeOffRequestsAddRequest withQueryParams(TimeOffRequestsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TimeOffRequestsAddHeaders headers;
    public TimeOffRequestsAddRequest withHeaders(TimeOffRequestsAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TimeOffRequestInput request;
    public TimeOffRequestsAddRequest withRequest(openapisdk.models.shared.TimeOffRequestInput request) {
        this.request = request;
        return this;
    }
    public TimeOffRequestsAddSecurity security;
    public TimeOffRequestsAddRequest withSecurity(TimeOffRequestsAddSecurity security) {
        this.security = security;
        return this;
    }
}