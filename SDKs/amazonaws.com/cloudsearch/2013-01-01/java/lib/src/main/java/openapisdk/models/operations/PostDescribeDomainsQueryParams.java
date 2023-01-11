package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDomainsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDomainsActionEnum action;
    public PostDescribeDomainsQueryParams withAction(PostDescribeDomainsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDomainsVersionEnum version;
    public PostDescribeDomainsQueryParams withVersion(PostDescribeDomainsVersionEnum version) {
        this.version = version;
        return this;
    }
}