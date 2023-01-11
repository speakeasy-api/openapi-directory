package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RequestBuyRecommendationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=url")
    public String url;
    public RequestBuyRecommendationQueryParams withUrl(String url) {
        this.url = url;
        return this;
    }
}