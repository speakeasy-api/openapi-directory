package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbInstanceAutomatedBackupRequest {
    public PostDeleteDbInstanceAutomatedBackupQueryParams queryParams;
    public PostDeleteDbInstanceAutomatedBackupRequest withQueryParams(PostDeleteDbInstanceAutomatedBackupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDbInstanceAutomatedBackupHeaders headers;
    public PostDeleteDbInstanceAutomatedBackupRequest withHeaders(PostDeleteDbInstanceAutomatedBackupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDbInstanceAutomatedBackupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}