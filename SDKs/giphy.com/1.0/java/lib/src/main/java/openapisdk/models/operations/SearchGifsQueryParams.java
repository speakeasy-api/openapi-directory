package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchGifsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public String lang;
    public SearchGifsQueryParams withLang(String lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public SearchGifsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public SearchGifsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public SearchGifsQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rating")
    public String rating;
    public SearchGifsQueryParams withRating(String rating) {
        this.rating = rating;
        return this;
    }
}