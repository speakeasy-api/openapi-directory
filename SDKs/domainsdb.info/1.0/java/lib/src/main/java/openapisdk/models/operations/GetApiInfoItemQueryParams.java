package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiInfoItemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetApiInfoItemQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}