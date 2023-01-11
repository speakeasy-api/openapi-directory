package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAvailabilityZonesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAvailabilityZonesActionEnum action;
    public PostDescribeAvailabilityZonesQueryParams withAction(PostDescribeAvailabilityZonesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAvailabilityZonesVersionEnum version;
    public PostDescribeAvailabilityZonesQueryParams withVersion(PostDescribeAvailabilityZonesVersionEnum version) {
        this.version = version;
        return this;
    }
}