package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyIdDatasetSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeUserKey userKey;
    public CompanyIdDatasetSecurity withUserKey(openapisdk.models.shared.SchemeUserKey userKey) {
        this.userKey = userKey;
        return this;
    }
}