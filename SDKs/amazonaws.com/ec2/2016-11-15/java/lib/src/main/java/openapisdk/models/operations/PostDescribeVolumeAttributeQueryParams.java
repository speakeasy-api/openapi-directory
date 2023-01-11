package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVolumeAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVolumeAttributeActionEnum action;
    public PostDescribeVolumeAttributeQueryParams withAction(PostDescribeVolumeAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVolumeAttributeVersionEnum version;
    public PostDescribeVolumeAttributeQueryParams withVersion(PostDescribeVolumeAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}