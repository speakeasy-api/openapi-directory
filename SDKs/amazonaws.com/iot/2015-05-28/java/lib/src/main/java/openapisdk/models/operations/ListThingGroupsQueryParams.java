package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListThingGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListThingGroupsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=namePrefixFilter")
    public String namePrefixFilter;
    public ListThingGroupsQueryParams withNamePrefixFilter(String namePrefixFilter) {
        this.namePrefixFilter = namePrefixFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListThingGroupsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parentGroup")
    public String parentGroup;
    public ListThingGroupsQueryParams withParentGroup(String parentGroup) {
        this.parentGroup = parentGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=recursive")
    public Boolean recursive;
    public ListThingGroupsQueryParams withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
}