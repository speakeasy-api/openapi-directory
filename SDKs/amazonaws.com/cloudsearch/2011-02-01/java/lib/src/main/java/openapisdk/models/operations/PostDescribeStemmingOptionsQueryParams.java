package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeStemmingOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeStemmingOptionsActionEnum action;
    public PostDescribeStemmingOptionsQueryParams withAction(PostDescribeStemmingOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeStemmingOptionsVersionEnum version;
    public PostDescribeStemmingOptionsQueryParams withVersion(PostDescribeStemmingOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}