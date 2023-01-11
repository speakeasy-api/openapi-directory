package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeAggregateIdFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeAggregateIdFormatActionEnum action;
    public GetDescribeAggregateIdFormatQueryParams withAction(GetDescribeAggregateIdFormatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDescribeAggregateIdFormatQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeAggregateIdFormatVersionEnum version;
    public GetDescribeAggregateIdFormatQueryParams withVersion(GetDescribeAggregateIdFormatVersionEnum version) {
        this.version = version;
        return this;
    }
}