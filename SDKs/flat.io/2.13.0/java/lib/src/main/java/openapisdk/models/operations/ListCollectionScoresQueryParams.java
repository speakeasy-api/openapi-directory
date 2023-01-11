package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCollectionScoresQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public ListCollectionScoresDirectionEnum direction;
    public ListCollectionScoresQueryParams withDirection(ListCollectionScoresDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListCollectionScoresQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next")
    public String next;
    public ListCollectionScoresQueryParams withNext(String next) {
        this.next = next;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=previous")
    public String previous;
    public ListCollectionScoresQueryParams withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public ListCollectionScoresQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ListCollectionScoresSortEnum sort;
    public ListCollectionScoresQueryParams withSort(ListCollectionScoresSortEnum sort) {
        this.sort = sort;
        return this;
    }
}