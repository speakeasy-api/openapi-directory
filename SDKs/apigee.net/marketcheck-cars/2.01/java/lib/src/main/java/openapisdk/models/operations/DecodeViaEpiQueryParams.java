package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DecodeViaEpiQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public DecodeViaEpiQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}