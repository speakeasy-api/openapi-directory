package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecallHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetRecallHistoryQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetRecallHistoryQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
}