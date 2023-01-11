package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostValidateConfigurationSettingsRequest {
    public PostValidateConfigurationSettingsQueryParams queryParams;
    public PostValidateConfigurationSettingsRequest withQueryParams(PostValidateConfigurationSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostValidateConfigurationSettingsHeaders headers;
    public PostValidateConfigurationSettingsRequest withHeaders(PostValidateConfigurationSettingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostValidateConfigurationSettingsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}