package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyAquaConfigurationRequest {
    public PostModifyAquaConfigurationQueryParams queryParams;
    public PostModifyAquaConfigurationRequest withQueryParams(PostModifyAquaConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyAquaConfigurationHeaders headers;
    public PostModifyAquaConfigurationRequest withHeaders(PostModifyAquaConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyAquaConfigurationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}