package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeTagsActionEnum action;
    public GetDescribeTagsQueryParams withAction(GetDescribeTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceArns")
    public String[] resourceArns;
    public GetDescribeTagsQueryParams withResourceArns(String[] resourceArns) {
        this.resourceArns = resourceArns;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeTagsVersionEnum version;
    public GetDescribeTagsQueryParams withVersion(GetDescribeTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}