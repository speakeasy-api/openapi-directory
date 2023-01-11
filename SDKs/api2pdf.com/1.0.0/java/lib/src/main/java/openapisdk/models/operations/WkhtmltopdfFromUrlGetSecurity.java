package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WkhtmltopdfFromUrlGetSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeQueryApiKey queryApiKey;
    public WkhtmltopdfFromUrlGetSecurity withQueryApiKey(openapisdk.models.shared.SchemeQueryApiKey queryApiKey) {
        this.queryApiKey = queryApiKey;
        return this;
    }
}