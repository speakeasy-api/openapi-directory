package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DecodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public DecodeQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}