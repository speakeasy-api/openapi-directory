package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrendingGifsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public TrendingGifsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public TrendingGifsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rating")
    public String rating;
    public TrendingGifsQueryParams withRating(String rating) {
        this.rating = rating;
        return this;
    }
}