package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainsUpdatesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetDomainsUpdatesListQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}