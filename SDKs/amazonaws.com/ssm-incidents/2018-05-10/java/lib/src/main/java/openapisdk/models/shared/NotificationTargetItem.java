package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationTargetItem
 * The SNS targets that are notified when updates are made to an incident.
**/
public class NotificationTargetItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snsTopicArn")
    public String snsTopicArn;
    public NotificationTargetItem withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
}