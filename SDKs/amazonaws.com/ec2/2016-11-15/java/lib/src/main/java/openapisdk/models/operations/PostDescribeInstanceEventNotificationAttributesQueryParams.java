package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceEventNotificationAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeInstanceEventNotificationAttributesActionEnum action;
    public PostDescribeInstanceEventNotificationAttributesQueryParams withAction(PostDescribeInstanceEventNotificationAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeInstanceEventNotificationAttributesVersionEnum version;
    public PostDescribeInstanceEventNotificationAttributesQueryParams withVersion(PostDescribeInstanceEventNotificationAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}