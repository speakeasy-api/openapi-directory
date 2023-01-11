package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserRateLimitsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_context")
    public String apiContext;
    public GetUserRateLimitsQueryParams withApiContext(String apiContext) {
        this.apiContext = apiContext;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_name")
    public String apiName;
    public GetUserRateLimitsQueryParams withApiName(String apiName) {
        this.apiName = apiName;
        return this;
    }
}