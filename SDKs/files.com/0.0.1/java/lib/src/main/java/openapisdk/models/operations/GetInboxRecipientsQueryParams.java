package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInboxRecipientsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetInboxRecipientsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public java.util.Map<String, Object> filter;
    public GetInboxRecipientsQueryParams withFilter(java.util.Map<String, Object> filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_gt")
    public java.util.Map<String, Object> filterGt;
    public GetInboxRecipientsQueryParams withFilterGt(java.util.Map<String, Object> filterGt) {
        this.filterGt = filterGt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_gteq")
    public java.util.Map<String, Object> filterGteq;
    public GetInboxRecipientsQueryParams withFilterGteq(java.util.Map<String, Object> filterGteq) {
        this.filterGteq = filterGteq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_like")
    public java.util.Map<String, Object> filterLike;
    public GetInboxRecipientsQueryParams withFilterLike(java.util.Map<String, Object> filterLike) {
        this.filterLike = filterLike;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_lt")
    public java.util.Map<String, Object> filterLt;
    public GetInboxRecipientsQueryParams withFilterLt(java.util.Map<String, Object> filterLt) {
        this.filterLt = filterLt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_lteq")
    public java.util.Map<String, Object> filterLteq;
    public GetInboxRecipientsQueryParams withFilterLteq(java.util.Map<String, Object> filterLteq) {
        this.filterLteq = filterLteq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inbox_id")
    public Integer inboxId;
    public GetInboxRecipientsQueryParams withInboxId(Integer inboxId) {
        this.inboxId = inboxId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetInboxRecipientsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public java.util.Map<String, Object> sortBy;
    public GetInboxRecipientsQueryParams withSortBy(java.util.Map<String, Object> sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetInboxRecipientsQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}