package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecommenderConfigurationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page-size")
    public String pageSize;
    public GetRecommenderConfigurationsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public GetRecommenderConfigurationsQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}