package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductOrderUboSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeUserKey userKey;
    public ProductOrderUboSecurity withUserKey(openapisdk.models.shared.SchemeUserKey userKey) {
        this.userKey = userKey;
        return this;
    }
}