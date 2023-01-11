package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetUsersQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public java.util.Map<String, Object> filter;
    public GetUsersQueryParams withFilter(java.util.Map<String, Object> filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_gt")
    public java.util.Map<String, Object> filterGt;
    public GetUsersQueryParams withFilterGt(java.util.Map<String, Object> filterGt) {
        this.filterGt = filterGt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_gteq")
    public java.util.Map<String, Object> filterGteq;
    public GetUsersQueryParams withFilterGteq(java.util.Map<String, Object> filterGteq) {
        this.filterGteq = filterGteq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_like")
    public java.util.Map<String, Object> filterLike;
    public GetUsersQueryParams withFilterLike(java.util.Map<String, Object> filterLike) {
        this.filterLike = filterLike;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_lt")
    public java.util.Map<String, Object> filterLt;
    public GetUsersQueryParams withFilterLt(java.util.Map<String, Object> filterLt) {
        this.filterLt = filterLt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_lteq")
    public java.util.Map<String, Object> filterLteq;
    public GetUsersQueryParams withFilterLteq(java.util.Map<String, Object> filterLteq) {
        this.filterLteq = filterLteq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public GetUsersQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetUsersQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q[admin]")
    public String qAdmin;
    public GetUsersQueryParams withQAdmin(String qAdmin) {
        this.qAdmin = qAdmin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q[allowed_ips]")
    public String qAllowedIps;
    public GetUsersQueryParams withQAllowedIps(String qAllowedIps) {
        this.qAllowedIps = qAllowedIps;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q[email]")
    public String qEmail;
    public GetUsersQueryParams withQEmail(String qEmail) {
        this.qEmail = qEmail;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q[notes]")
    public String qNotes;
    public GetUsersQueryParams withQNotes(String qNotes) {
        this.qNotes = qNotes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q[password_validity_days]")
    public String qPasswordValidityDays;
    public GetUsersQueryParams withQPasswordValidityDays(String qPasswordValidityDays) {
        this.qPasswordValidityDays = qPasswordValidityDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q[ssl_required]")
    public String qSslRequired;
    public GetUsersQueryParams withQSslRequired(String qSslRequired) {
        this.qSslRequired = qSslRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q[username]")
    public String qUsername;
    public GetUsersQueryParams withQUsername(String qUsername) {
        this.qUsername = qUsername;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetUsersQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public java.util.Map<String, Object> sortBy;
    public GetUsersQueryParams withSortBy(java.util.Map<String, Object> sortBy) {
        this.sortBy = sortBy;
        return this;
    }
}