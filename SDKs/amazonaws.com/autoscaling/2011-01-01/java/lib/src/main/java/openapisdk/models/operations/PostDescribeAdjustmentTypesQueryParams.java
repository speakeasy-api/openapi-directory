package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAdjustmentTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAdjustmentTypesActionEnum action;
    public PostDescribeAdjustmentTypesQueryParams withAction(PostDescribeAdjustmentTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAdjustmentTypesVersionEnum version;
    public PostDescribeAdjustmentTypesQueryParams withVersion(PostDescribeAdjustmentTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}