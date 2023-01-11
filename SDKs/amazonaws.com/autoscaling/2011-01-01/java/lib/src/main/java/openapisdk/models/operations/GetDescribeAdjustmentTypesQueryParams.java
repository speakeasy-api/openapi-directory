package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeAdjustmentTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeAdjustmentTypesActionEnum action;
    public GetDescribeAdjustmentTypesQueryParams withAction(GetDescribeAdjustmentTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeAdjustmentTypesVersionEnum version;
    public GetDescribeAdjustmentTypesQueryParams withVersion(GetDescribeAdjustmentTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}