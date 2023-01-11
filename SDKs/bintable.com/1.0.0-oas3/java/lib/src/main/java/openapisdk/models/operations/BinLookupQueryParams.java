package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinLookupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public BinLookupQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}