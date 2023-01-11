package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivitiesAddRequest {
    public ActivitiesAddQueryParams queryParams;
    public ActivitiesAddRequest withQueryParams(ActivitiesAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ActivitiesAddHeaders headers;
    public ActivitiesAddRequest withHeaders(ActivitiesAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ActivityInput request;
    public ActivitiesAddRequest withRequest(openapisdk.models.shared.ActivityInput request) {
        this.request = request;
        return this;
    }
    public ActivitiesAddSecurity security;
    public ActivitiesAddRequest withSecurity(ActivitiesAddSecurity security) {
        this.security = security;
        return this;
    }
}