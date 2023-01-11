package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchV1ScrapeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetSearchV1ScrapeQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetSearchV1ScrapeQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=field")
    public String field;
    public GetSearchV1ScrapeQueryParams withField(String field) {
        this.field = field;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetSearchV1ScrapeQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Long size;
    public GetSearchV1ScrapeQueryParams withSize(Long size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSearchV1ScrapeQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=total_only")
    public Boolean totalOnly;
    public GetSearchV1ScrapeQueryParams withTotalOnly(Boolean totalOnly) {
        this.totalOnly = totalOnly;
        return this;
    }
}