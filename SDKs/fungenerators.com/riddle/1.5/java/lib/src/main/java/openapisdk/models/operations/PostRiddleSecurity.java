package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRiddleSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeXFungeneratorsApiSecret xFungeneratorsApiSecret;
    public PostRiddleSecurity withXFungeneratorsApiSecret(openapisdk.models.shared.SchemeXFungeneratorsApiSecret xFungeneratorsApiSecret) {
        this.xFungeneratorsApiSecret = xFungeneratorsApiSecret;
        return this;
    }
}