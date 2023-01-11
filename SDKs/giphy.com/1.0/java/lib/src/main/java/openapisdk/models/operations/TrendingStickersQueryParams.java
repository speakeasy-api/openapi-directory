package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrendingStickersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public TrendingStickersQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public TrendingStickersQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rating")
    public String rating;
    public TrendingStickersQueryParams withRating(String rating) {
        this.rating = rating;
        return this;
    }
}