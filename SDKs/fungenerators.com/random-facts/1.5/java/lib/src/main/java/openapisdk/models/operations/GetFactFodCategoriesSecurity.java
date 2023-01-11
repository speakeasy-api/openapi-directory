package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFactFodCategoriesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeXFungeneratorsApiSecret xFungeneratorsApiSecret;
    public GetFactFodCategoriesSecurity withXFungeneratorsApiSecret(openapisdk.models.shared.SchemeXFungeneratorsApiSecret xFungeneratorsApiSecret) {
        this.xFungeneratorsApiSecret = xFungeneratorsApiSecret;
        return this;
    }
}