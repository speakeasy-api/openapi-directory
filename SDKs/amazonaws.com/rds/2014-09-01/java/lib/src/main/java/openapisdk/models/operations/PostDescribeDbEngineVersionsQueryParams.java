package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbEngineVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbEngineVersionsActionEnum action;
    public PostDescribeDbEngineVersionsQueryParams withAction(PostDescribeDbEngineVersionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbEngineVersionsVersionEnum version;
    public PostDescribeDbEngineVersionsQueryParams withVersion(PostDescribeDbEngineVersionsVersionEnum version) {
        this.version = version;
        return this;
    }
}