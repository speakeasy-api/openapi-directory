package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeElasticGpusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeElasticGpusActionEnum action;
    public PostDescribeElasticGpusQueryParams withAction(PostDescribeElasticGpusActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeElasticGpusVersionEnum version;
    public PostDescribeElasticGpusQueryParams withVersion(PostDescribeElasticGpusVersionEnum version) {
        this.version = version;
        return this;
    }
}