package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPutNotificationConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetPutNotificationConfigurationActionEnum action;
    public GetPutNotificationConfigurationQueryParams withAction(GetPutNotificationConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetPutNotificationConfigurationQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NotificationTypes")
    public String[] notificationTypes;
    public GetPutNotificationConfigurationQueryParams withNotificationTypes(String[] notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TopicARN")
    public String topicARN;
    public GetPutNotificationConfigurationQueryParams withTopicArn(String topicARN) {
        this.topicARN = topicARN;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetPutNotificationConfigurationVersionEnum version;
    public GetPutNotificationConfigurationQueryParams withVersion(GetPutNotificationConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}