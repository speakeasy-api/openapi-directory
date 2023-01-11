package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeInstanceEventNotificationAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeInstanceEventNotificationAttributesActionEnum action;
    public GetDescribeInstanceEventNotificationAttributesQueryParams withAction(GetDescribeInstanceEventNotificationAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDescribeInstanceEventNotificationAttributesQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeInstanceEventNotificationAttributesVersionEnum version;
    public GetDescribeInstanceEventNotificationAttributesQueryParams withVersion(GetDescribeInstanceEventNotificationAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}