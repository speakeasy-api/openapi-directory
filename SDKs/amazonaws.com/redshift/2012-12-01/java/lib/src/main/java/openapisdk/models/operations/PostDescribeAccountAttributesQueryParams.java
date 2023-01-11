package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAccountAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAccountAttributesActionEnum action;
    public PostDescribeAccountAttributesQueryParams withAction(PostDescribeAccountAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAccountAttributesVersionEnum version;
    public PostDescribeAccountAttributesQueryParams withVersion(PostDescribeAccountAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}