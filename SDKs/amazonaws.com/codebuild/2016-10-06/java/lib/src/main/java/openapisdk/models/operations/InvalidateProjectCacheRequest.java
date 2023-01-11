package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvalidateProjectCacheRequest {
    public InvalidateProjectCacheHeaders headers;
    public InvalidateProjectCacheRequest withHeaders(InvalidateProjectCacheHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InvalidateProjectCacheInput request;
    public InvalidateProjectCacheRequest withRequest(openapisdk.models.shared.InvalidateProjectCacheInput request) {
        this.request = request;
        return this;
    }
}