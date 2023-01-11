package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NifComprehensiveSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeUserKey userKey;
    public NifComprehensiveSecurity withUserKey(openapisdk.models.shared.SchemeUserKey userKey) {
        this.userKey = userKey;
        return this;
    }
}