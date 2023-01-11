package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeAutoScalingNotificationTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeAutoScalingNotificationTypesActionEnum action;
    public GetDescribeAutoScalingNotificationTypesQueryParams withAction(GetDescribeAutoScalingNotificationTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeAutoScalingNotificationTypesVersionEnum version;
    public GetDescribeAutoScalingNotificationTypesQueryParams withVersion(GetDescribeAutoScalingNotificationTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}