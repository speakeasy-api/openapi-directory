package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeStopwordOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeStopwordOptionsActionEnum action;
    public PostDescribeStopwordOptionsQueryParams withAction(PostDescribeStopwordOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeStopwordOptionsVersionEnum version;
    public PostDescribeStopwordOptionsQueryParams withVersion(PostDescribeStopwordOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}