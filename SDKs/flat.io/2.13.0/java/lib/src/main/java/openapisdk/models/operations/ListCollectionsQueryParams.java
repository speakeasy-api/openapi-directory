package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCollectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public ListCollectionsDirectionEnum direction;
    public ListCollectionsQueryParams withDirection(ListCollectionsDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListCollectionsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next")
    public String next;
    public ListCollectionsQueryParams withNext(String next) {
        this.next = next;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parent")
    public String parent;
    public ListCollectionsQueryParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=previous")
    public String previous;
    public ListCollectionsQueryParams withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ListCollectionsSortEnum sort;
    public ListCollectionsQueryParams withSort(ListCollectionsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}