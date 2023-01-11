package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BalanceLookupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public BalanceLookupQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}