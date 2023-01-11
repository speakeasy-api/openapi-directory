package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SharedLinksAddRequest {
    public SharedLinksAddQueryParams queryParams;
    public SharedLinksAddRequest withQueryParams(SharedLinksAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SharedLinksAddHeaders headers;
    public SharedLinksAddRequest withHeaders(SharedLinksAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SharedLinkInput request;
    public SharedLinksAddRequest withRequest(openapisdk.models.shared.SharedLinkInput request) {
        this.request = request;
        return this;
    }
    public SharedLinksAddSecurity security;
    public SharedLinksAddRequest withSecurity(SharedLinksAddSecurity security) {
        this.security = security;
        return this;
    }
}