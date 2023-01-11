package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FoldersUpdateRequest {
    public FoldersUpdatePathParams pathParams;
    public FoldersUpdateRequest withPathParams(FoldersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FoldersUpdateQueryParams queryParams;
    public FoldersUpdateRequest withQueryParams(FoldersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FoldersUpdateHeaders headers;
    public FoldersUpdateRequest withHeaders(FoldersUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFolderRequestInput request;
    public FoldersUpdateRequest withRequest(openapisdk.models.shared.UpdateFolderRequestInput request) {
        this.request = request;
        return this;
    }
    public FoldersUpdateSecurity security;
    public FoldersUpdateRequest withSecurity(FoldersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}