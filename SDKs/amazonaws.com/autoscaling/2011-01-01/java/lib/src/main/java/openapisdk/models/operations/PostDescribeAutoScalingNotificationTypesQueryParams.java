package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAutoScalingNotificationTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAutoScalingNotificationTypesActionEnum action;
    public PostDescribeAutoScalingNotificationTypesQueryParams withAction(PostDescribeAutoScalingNotificationTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAutoScalingNotificationTypesVersionEnum version;
    public PostDescribeAutoScalingNotificationTypesQueryParams withVersion(PostDescribeAutoScalingNotificationTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}