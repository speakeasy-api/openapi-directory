package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ZebraGetSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeQueryApiKey queryApiKey;
    public ZebraGetSecurity withQueryApiKey(openapisdk.models.shared.SchemeQueryApiKey queryApiKey) {
        this.queryApiKey = queryApiKey;
        return this;
    }
}