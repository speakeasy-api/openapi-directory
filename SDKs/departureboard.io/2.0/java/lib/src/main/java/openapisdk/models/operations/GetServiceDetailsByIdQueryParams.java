package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceDetailsByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiKey")
    public String apiKey;
    public GetServiceDetailsByIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}