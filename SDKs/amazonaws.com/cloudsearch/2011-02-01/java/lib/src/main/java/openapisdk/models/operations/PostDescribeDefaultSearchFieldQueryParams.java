package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDefaultSearchFieldQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDefaultSearchFieldActionEnum action;
    public PostDescribeDefaultSearchFieldQueryParams withAction(PostDescribeDefaultSearchFieldActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDefaultSearchFieldVersionEnum version;
    public PostDescribeDefaultSearchFieldQueryParams withVersion(PostDescribeDefaultSearchFieldVersionEnum version) {
        this.version = version;
        return this;
    }
}