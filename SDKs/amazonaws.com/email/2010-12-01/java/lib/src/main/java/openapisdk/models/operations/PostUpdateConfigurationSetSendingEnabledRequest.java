package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateConfigurationSetSendingEnabledRequest {
    public PostUpdateConfigurationSetSendingEnabledQueryParams queryParams;
    public PostUpdateConfigurationSetSendingEnabledRequest withQueryParams(PostUpdateConfigurationSetSendingEnabledQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateConfigurationSetSendingEnabledHeaders headers;
    public PostUpdateConfigurationSetSendingEnabledRequest withHeaders(PostUpdateConfigurationSetSendingEnabledHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateConfigurationSetSendingEnabledRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}