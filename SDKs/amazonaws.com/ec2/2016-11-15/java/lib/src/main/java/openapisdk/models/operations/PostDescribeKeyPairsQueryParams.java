package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeKeyPairsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeKeyPairsActionEnum action;
    public PostDescribeKeyPairsQueryParams withAction(PostDescribeKeyPairsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeKeyPairsVersionEnum version;
    public PostDescribeKeyPairsQueryParams withVersion(PostDescribeKeyPairsVersionEnum version) {
        this.version = version;
        return this;
    }
}