package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPermissionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetPermissionsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public java.util.Map<String, Object> filter;
    public GetPermissionsQueryParams withFilter(java.util.Map<String, Object> filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_gt")
    public java.util.Map<String, Object> filterGt;
    public GetPermissionsQueryParams withFilterGt(java.util.Map<String, Object> filterGt) {
        this.filterGt = filterGt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_gteq")
    public java.util.Map<String, Object> filterGteq;
    public GetPermissionsQueryParams withFilterGteq(java.util.Map<String, Object> filterGteq) {
        this.filterGteq = filterGteq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_like")
    public java.util.Map<String, Object> filterLike;
    public GetPermissionsQueryParams withFilterLike(java.util.Map<String, Object> filterLike) {
        this.filterLike = filterLike;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_lt")
    public java.util.Map<String, Object> filterLt;
    public GetPermissionsQueryParams withFilterLt(java.util.Map<String, Object> filterLt) {
        this.filterLt = filterLt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_lteq")
    public java.util.Map<String, Object> filterLteq;
    public GetPermissionsQueryParams withFilterLteq(java.util.Map<String, Object> filterLteq) {
        this.filterLteq = filterLteq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group_id")
    public String groupId;
    public GetPermissionsQueryParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_groups")
    public Boolean includeGroups;
    public GetPermissionsQueryParams withIncludeGroups(Boolean includeGroups) {
        this.includeGroups = includeGroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=path")
    public String path;
    public GetPermissionsQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetPermissionsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public java.util.Map<String, Object> sortBy;
    public GetPermissionsQueryParams withSortBy(java.util.Map<String, Object> sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public String userId;
    public GetPermissionsQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}