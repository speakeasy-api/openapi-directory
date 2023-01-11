package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchStickersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public String lang;
    public SearchStickersQueryParams withLang(String lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public SearchStickersQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public SearchStickersQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public SearchStickersQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rating")
    public String rating;
    public SearchStickersQueryParams withRating(String rating) {
        this.rating = rating;
        return this;
    }
}