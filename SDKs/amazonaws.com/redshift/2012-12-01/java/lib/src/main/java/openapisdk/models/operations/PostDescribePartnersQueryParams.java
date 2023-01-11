package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribePartnersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribePartnersActionEnum action;
    public PostDescribePartnersQueryParams withAction(PostDescribePartnersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribePartnersVersionEnum version;
    public PostDescribePartnersQueryParams withVersion(PostDescribePartnersVersionEnum version) {
        this.version = version;
        return this;
    }
}