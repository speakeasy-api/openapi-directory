package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContractIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeKey2 key2;
    public PostContractIdSecurity withKey2(openapisdk.models.shared.SchemeKey2 key2) {
        this.key2 = key2;
        return this;
    }
}