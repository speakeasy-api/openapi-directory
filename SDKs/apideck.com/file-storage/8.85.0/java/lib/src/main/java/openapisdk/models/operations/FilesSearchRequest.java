package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesSearchRequest {
    public FilesSearchHeaders headers;
    public FilesSearchRequest withHeaders(FilesSearchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FilesSearch request;
    public FilesSearchRequest withRequest(openapisdk.models.shared.FilesSearch request) {
        this.request = request;
        return this;
    }
    public FilesSearchSecurity security;
    public FilesSearchRequest withSecurity(FilesSearchSecurity security) {
        this.security = security;
        return this;
    }
}