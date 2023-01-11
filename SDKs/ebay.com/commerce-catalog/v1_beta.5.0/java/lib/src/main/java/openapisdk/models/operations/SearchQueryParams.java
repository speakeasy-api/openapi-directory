package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=aspect_filter")
    public String aspectFilter;
    public SearchQueryParams withAspectFilter(String aspectFilter) {
        this.aspectFilter = aspectFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category_ids")
    public String categoryIds;
    public SearchQueryParams withCategoryIds(String categoryIds) {
        this.categoryIds = categoryIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fieldgroups")
    public String fieldgroups;
    public SearchQueryParams withFieldgroups(String fieldgroups) {
        this.fieldgroups = fieldgroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gtin")
    public String gtin;
    public SearchQueryParams withGtin(String gtin) {
        this.gtin = gtin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public SearchQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mpn")
    public String mpn;
    public SearchQueryParams withMpn(String mpn) {
        this.mpn = mpn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public SearchQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public SearchQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
}