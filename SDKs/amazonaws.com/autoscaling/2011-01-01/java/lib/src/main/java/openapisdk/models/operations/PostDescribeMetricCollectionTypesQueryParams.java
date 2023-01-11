package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeMetricCollectionTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeMetricCollectionTypesActionEnum action;
    public PostDescribeMetricCollectionTypesQueryParams withAction(PostDescribeMetricCollectionTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeMetricCollectionTypesVersionEnum version;
    public PostDescribeMetricCollectionTypesQueryParams withVersion(PostDescribeMetricCollectionTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}