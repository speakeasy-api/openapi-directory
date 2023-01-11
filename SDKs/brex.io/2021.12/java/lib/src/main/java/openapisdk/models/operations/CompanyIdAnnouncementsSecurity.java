package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyIdAnnouncementsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeUserKey userKey;
    public CompanyIdAnnouncementsSecurity withUserKey(openapisdk.models.shared.SchemeUserKey userKey) {
        this.userKey = userKey;
        return this;
    }
}