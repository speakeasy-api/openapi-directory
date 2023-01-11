package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SslSetupRequest {
    public SslSetupQueryParams queryParams;
    public SslSetupRequest withQueryParams(SslSetupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public SslSetupRequestBody request;
    public SslSetupRequest withRequest(SslSetupRequestBody request) {
        this.request = request;
        return this;
    }
}