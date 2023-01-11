package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostImportInstallationMediaRequest {
    public PostImportInstallationMediaQueryParams queryParams;
    public PostImportInstallationMediaRequest withQueryParams(PostImportInstallationMediaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostImportInstallationMediaHeaders headers;
    public PostImportInstallationMediaRequest withHeaders(PostImportInstallationMediaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostImportInstallationMediaRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}