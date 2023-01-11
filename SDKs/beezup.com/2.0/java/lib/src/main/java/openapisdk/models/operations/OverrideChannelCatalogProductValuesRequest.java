package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OverrideChannelCatalogProductValuesRequest {
    public OverrideChannelCatalogProductValuesPathParams pathParams;
    public OverrideChannelCatalogProductValuesRequest withPathParams(OverrideChannelCatalogProductValuesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, String> request;
    public OverrideChannelCatalogProductValuesRequest withRequest(java.util.Map<String, String> request) {
        this.request = request;
        return this;
    }
}