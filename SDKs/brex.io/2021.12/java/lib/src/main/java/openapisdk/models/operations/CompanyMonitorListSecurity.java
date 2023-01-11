package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyMonitorListSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeUserKey userKey;
    public CompanyMonitorListSecurity withUserKey(openapisdk.models.shared.SchemeUserKey userKey) {
        this.userKey = userKey;
        return this;
    }
}