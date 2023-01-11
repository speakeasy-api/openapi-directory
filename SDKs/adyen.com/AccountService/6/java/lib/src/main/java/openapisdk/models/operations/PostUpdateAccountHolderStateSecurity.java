package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAccountHolderStateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeBasicAuth basicAuth;
    public PostUpdateAccountHolderStateSecurity withBasicAuth(openapisdk.models.shared.SchemeBasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth;
    public PostUpdateAccountHolderStateSecurity withApiKeyAuth(openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth) {
        this.apiKeyAuth = apiKeyAuth;
        return this;
    }
}