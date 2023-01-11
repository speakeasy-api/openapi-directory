package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRateLimitsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_context")
    public String apiContext;
    public GetRateLimitsQueryParams withApiContext(String apiContext) {
        this.apiContext = apiContext;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_name")
    public String apiName;
    public GetRateLimitsQueryParams withApiName(String apiName) {
        this.apiName = apiName;
        return this;
    }
}