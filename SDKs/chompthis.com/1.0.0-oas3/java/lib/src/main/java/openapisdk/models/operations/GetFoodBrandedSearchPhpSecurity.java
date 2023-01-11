package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFoodBrandedSearchPhpSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth;
    public GetFoodBrandedSearchPhpSecurity withApiKeyAuth(openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth) {
        this.apiKeyAuth = apiKeyAuth;
        return this;
    }
}