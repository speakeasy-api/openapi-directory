package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBatchesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=batchStatus")
    public GetBatchesBatchStatusEnum batchStatus;
    public GetBatchesQueryParams withBatchStatus(GetBatchesBatchStatusEnum batchStatus) {
        this.batchStatus = batchStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=batchTypes")
    public GetBatchesBatchTypesEnum batchTypes;
    public GetBatchesQueryParams withBatchTypes(GetBatchesBatchTypesEnum batchTypes) {
        this.batchTypes = batchTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public GetBatchesOrderEnum order;
    public GetBatchesQueryParams withOrder(GetBatchesOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=orderBy")
    public GetBatchesOrderByEnum orderBy;
    public GetBatchesQueryParams withOrderBy(GetBatchesOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
}