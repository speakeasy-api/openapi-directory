package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeMetricCollectionTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeMetricCollectionTypesActionEnum action;
    public GetDescribeMetricCollectionTypesQueryParams withAction(GetDescribeMetricCollectionTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeMetricCollectionTypesVersionEnum version;
    public GetDescribeMetricCollectionTypesQueryParams withVersion(GetDescribeMetricCollectionTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}