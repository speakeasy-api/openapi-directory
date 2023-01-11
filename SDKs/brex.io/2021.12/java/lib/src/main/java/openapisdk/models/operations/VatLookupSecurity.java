package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VatLookupSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeUserKey userKey;
    public VatLookupSecurity withUserKey(openapisdk.models.shared.SchemeUserKey userKey) {
        this.userKey = userKey;
        return this;
    }
}