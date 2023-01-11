package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PepMonitorUpdateRequest {
    public PepMonitorUpdatePathParams pathParams;
    public PepMonitorUpdateRequest withPathParams(PepMonitorUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public PepMonitorUpdateRequestBody request;
    public PepMonitorUpdateRequest withRequest(PepMonitorUpdateRequestBody request) {
        this.request = request;
        return this;
    }
    public PepMonitorUpdateSecurity security;
    public PepMonitorUpdateRequest withSecurity(PepMonitorUpdateSecurity security) {
        this.security = security;
        return this;
    }
}