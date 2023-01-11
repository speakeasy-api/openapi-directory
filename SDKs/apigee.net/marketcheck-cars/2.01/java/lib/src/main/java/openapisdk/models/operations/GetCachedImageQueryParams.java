package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCachedImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCachedImageQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}