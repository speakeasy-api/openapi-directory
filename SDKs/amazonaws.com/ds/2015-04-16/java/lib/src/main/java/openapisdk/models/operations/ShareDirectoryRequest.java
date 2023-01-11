package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ShareDirectoryRequest {
    public ShareDirectoryHeaders headers;
    public ShareDirectoryRequest withHeaders(ShareDirectoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ShareDirectoryRequest request;
    public ShareDirectoryRequest withRequest(openapisdk.models.shared.ShareDirectoryRequest request) {
        this.request = request;
        return this;
    }
}