package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeOptionGroupOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeOptionGroupOptionsActionEnum action;
    public PostDescribeOptionGroupOptionsQueryParams withAction(PostDescribeOptionGroupOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeOptionGroupOptionsVersionEnum version;
    public PostDescribeOptionGroupOptionsQueryParams withVersion(PostDescribeOptionGroupOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}