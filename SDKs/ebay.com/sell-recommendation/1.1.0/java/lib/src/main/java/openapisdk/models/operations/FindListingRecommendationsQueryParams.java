package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindListingRecommendationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public FindListingRecommendationsQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public FindListingRecommendationsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public FindListingRecommendationsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}