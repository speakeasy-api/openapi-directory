package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAttachedPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListAttachedPoliciesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public ListAttachedPoliciesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recursive")
    public Boolean recursive;
    public ListAttachedPoliciesQueryParams withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
}