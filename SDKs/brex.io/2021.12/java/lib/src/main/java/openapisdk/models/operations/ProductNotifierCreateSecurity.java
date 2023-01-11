package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductNotifierCreateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeUserKey userKey;
    public ProductNotifierCreateSecurity withUserKey(openapisdk.models.shared.SchemeUserKey userKey) {
        this.userKey = userKey;
        return this;
    }
}