package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadDefaultKeyPairRequest {
    public DownloadDefaultKeyPairHeaders headers;
    public DownloadDefaultKeyPairRequest withHeaders(DownloadDefaultKeyPairHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DownloadDefaultKeyPairRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}