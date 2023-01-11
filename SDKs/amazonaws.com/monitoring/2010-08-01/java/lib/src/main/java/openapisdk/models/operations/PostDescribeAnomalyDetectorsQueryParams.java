package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAnomalyDetectorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAnomalyDetectorsActionEnum action;
    public PostDescribeAnomalyDetectorsQueryParams withAction(PostDescribeAnomalyDetectorsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAnomalyDetectorsVersionEnum version;
    public PostDescribeAnomalyDetectorsQueryParams withVersion(PostDescribeAnomalyDetectorsVersionEnum version) {
        this.version = version;
        return this;
    }
}