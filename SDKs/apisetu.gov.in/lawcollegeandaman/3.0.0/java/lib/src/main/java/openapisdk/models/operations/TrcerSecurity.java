package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrcerSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApiKey apiKey;
    public TrcerSecurity withApiKey(openapisdk.models.shared.SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeClientId clientId;
    public TrcerSecurity withClientId(openapisdk.models.shared.SchemeClientId clientId) {
        this.clientId = clientId;
        return this;
    }
}