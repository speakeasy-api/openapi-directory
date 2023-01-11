package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGet3dsAvailabilitySecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeBasicAuth basicAuth;
    public PostGet3dsAvailabilitySecurity withBasicAuth(openapisdk.models.shared.SchemeBasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth;
    public PostGet3dsAvailabilitySecurity withApiKeyAuth(openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth) {
        this.apiKeyAuth = apiKeyAuth;
        return this;
    }
}