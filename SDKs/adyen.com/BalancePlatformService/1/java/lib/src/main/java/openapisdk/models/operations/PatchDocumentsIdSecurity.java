package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDocumentsIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeBasicAuth basicAuth;
    public PatchDocumentsIdSecurity withBasicAuth(openapisdk.models.shared.SchemeBasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth;
    public PatchDocumentsIdSecurity withApiKeyAuth(openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth) {
        this.apiKeyAuth = apiKeyAuth;
        return this;
    }
}