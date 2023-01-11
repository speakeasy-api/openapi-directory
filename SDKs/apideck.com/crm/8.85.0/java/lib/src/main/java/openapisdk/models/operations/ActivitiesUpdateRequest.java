package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivitiesUpdateRequest {
    public ActivitiesUpdatePathParams pathParams;
    public ActivitiesUpdateRequest withPathParams(ActivitiesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ActivitiesUpdateQueryParams queryParams;
    public ActivitiesUpdateRequest withQueryParams(ActivitiesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ActivitiesUpdateHeaders headers;
    public ActivitiesUpdateRequest withHeaders(ActivitiesUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ActivityInput request;
    public ActivitiesUpdateRequest withRequest(openapisdk.models.shared.ActivityInput request) {
        this.request = request;
        return this;
    }
    public ActivitiesUpdateSecurity security;
    public ActivitiesUpdateRequest withSecurity(ActivitiesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}