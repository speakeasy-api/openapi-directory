package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFoodIngredientSearchPhpSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth;
    public GetFoodIngredientSearchPhpSecurity withApiKeyAuth(openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth) {
        this.apiKeyAuth = apiKeyAuth;
        return this;
    }
}