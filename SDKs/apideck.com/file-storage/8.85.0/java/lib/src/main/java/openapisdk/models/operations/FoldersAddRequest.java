package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FoldersAddRequest {
    public FoldersAddQueryParams queryParams;
    public FoldersAddRequest withQueryParams(FoldersAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FoldersAddHeaders headers;
    public FoldersAddRequest withHeaders(FoldersAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateFolderRequestInput request;
    public FoldersAddRequest withRequest(openapisdk.models.shared.CreateFolderRequestInput request) {
        this.request = request;
        return this;
    }
    public FoldersAddSecurity security;
    public FoldersAddRequest withSecurity(FoldersAddSecurity security) {
        this.security = security;
        return this;
    }
}