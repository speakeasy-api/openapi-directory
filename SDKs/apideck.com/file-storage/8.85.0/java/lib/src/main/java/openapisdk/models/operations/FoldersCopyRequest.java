package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FoldersCopyRequest {
    public FoldersCopyPathParams pathParams;
    public FoldersCopyRequest withPathParams(FoldersCopyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FoldersCopyQueryParams queryParams;
    public FoldersCopyRequest withQueryParams(FoldersCopyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FoldersCopyHeaders headers;
    public FoldersCopyRequest withHeaders(FoldersCopyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CopyFolderRequestInput request;
    public FoldersCopyRequest withRequest(openapisdk.models.shared.CopyFolderRequestInput request) {
        this.request = request;
        return this;
    }
    public FoldersCopySecurity security;
    public FoldersCopyRequest withSecurity(FoldersCopySecurity security) {
        this.security = security;
        return this;
    }
}