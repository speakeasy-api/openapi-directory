package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SharedLinksUpdateRequest {
    public SharedLinksUpdatePathParams pathParams;
    public SharedLinksUpdateRequest withPathParams(SharedLinksUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SharedLinksUpdateQueryParams queryParams;
    public SharedLinksUpdateRequest withQueryParams(SharedLinksUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SharedLinksUpdateHeaders headers;
    public SharedLinksUpdateRequest withHeaders(SharedLinksUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SharedLinkInput request;
    public SharedLinksUpdateRequest withRequest(openapisdk.models.shared.SharedLinkInput request) {
        this.request = request;
        return this;
    }
    public SharedLinksUpdateSecurity security;
    public SharedLinksUpdateRequest withSecurity(SharedLinksUpdateSecurity security) {
        this.security = security;
        return this;
    }
}