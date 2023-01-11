package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteNotificationConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteNotificationConfigurationActionEnum action;
    public GetDeleteNotificationConfigurationQueryParams withAction(GetDeleteNotificationConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDeleteNotificationConfigurationQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TopicARN")
    public String topicARN;
    public GetDeleteNotificationConfigurationQueryParams withTopicArn(String topicARN) {
        this.topicARN = topicARN;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteNotificationConfigurationVersionEnum version;
    public GetDeleteNotificationConfigurationQueryParams withVersion(GetDeleteNotificationConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}