package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteInstallationMediaRequest {
    public PostDeleteInstallationMediaQueryParams queryParams;
    public PostDeleteInstallationMediaRequest withQueryParams(PostDeleteInstallationMediaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteInstallationMediaHeaders headers;
    public PostDeleteInstallationMediaRequest withHeaders(PostDeleteInstallationMediaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteInstallationMediaRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}