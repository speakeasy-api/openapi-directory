package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSiteApiKeysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetSiteApiKeysQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public java.util.Map<String, Object> filter;
    public GetSiteApiKeysQueryParams withFilter(java.util.Map<String, Object> filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_gt")
    public java.util.Map<String, Object> filterGt;
    public GetSiteApiKeysQueryParams withFilterGt(java.util.Map<String, Object> filterGt) {
        this.filterGt = filterGt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_gteq")
    public java.util.Map<String, Object> filterGteq;
    public GetSiteApiKeysQueryParams withFilterGteq(java.util.Map<String, Object> filterGteq) {
        this.filterGteq = filterGteq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_like")
    public java.util.Map<String, Object> filterLike;
    public GetSiteApiKeysQueryParams withFilterLike(java.util.Map<String, Object> filterLike) {
        this.filterLike = filterLike;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_lt")
    public java.util.Map<String, Object> filterLt;
    public GetSiteApiKeysQueryParams withFilterLt(java.util.Map<String, Object> filterLt) {
        this.filterLt = filterLt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_lteq")
    public java.util.Map<String, Object> filterLteq;
    public GetSiteApiKeysQueryParams withFilterLteq(java.util.Map<String, Object> filterLteq) {
        this.filterLteq = filterLteq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetSiteApiKeysQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public java.util.Map<String, Object> sortBy;
    public GetSiteApiKeysQueryParams withSortBy(java.util.Map<String, Object> sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetSiteApiKeysQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}