package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFoodBrandedBarcodePhpSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth;
    public GetFoodBrandedBarcodePhpSecurity withApiKeyAuth(openapisdk.models.shared.SchemeApiKeyAuth apiKeyAuth) {
        this.apiKeyAuth = apiKeyAuth;
        return this;
    }
}