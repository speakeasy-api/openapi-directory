package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListArtifactsInGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListArtifactsInGroupQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ListArtifactsInGroupQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public openapisdk.models.shared.SortOrderEnum order;
    public ListArtifactsInGroupQueryParams withOrder(openapisdk.models.shared.SortOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderby")
    public openapisdk.models.shared.SortByEnum orderby;
    public ListArtifactsInGroupQueryParams withOrderby(openapisdk.models.shared.SortByEnum orderby) {
        this.orderby = orderby;
        return this;
    }
}