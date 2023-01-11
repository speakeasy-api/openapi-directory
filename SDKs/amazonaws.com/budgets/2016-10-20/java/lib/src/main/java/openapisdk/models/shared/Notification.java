package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Notification
 * <p>A notification that is associated with a budget. A budget can have up to ten notifications. </p> <p>Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.</p> <p>For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:</p> <ul> <li> <p>A notificationType of <code>ACTUAL</code> </p> </li> <li> <p>A <code>thresholdType</code> of <code>PERCENTAGE</code> </p> </li> <li> <p>A <code>comparisonOperator</code> of <code>GREATER_THAN</code> </p> </li> <li> <p>A notification <code>threshold</code> of <code>80</code> </p> </li> </ul>
**/
public class Notification {
    @JsonProperty("ComparisonOperator")
    public ComparisonOperatorEnum comparisonOperator;
    public Notification withComparisonOperator(ComparisonOperatorEnum comparisonOperator) {
        this.comparisonOperator = comparisonOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationState")
    public NotificationStateEnum notificationState;
    public Notification withNotificationState(NotificationStateEnum notificationState) {
        this.notificationState = notificationState;
        return this;
    }
    @JsonProperty("NotificationType")
    public NotificationTypeEnum notificationType;
    public Notification withNotificationType(NotificationTypeEnum notificationType) {
        this.notificationType = notificationType;
        return this;
    }
    @JsonProperty("Threshold")
    public Double threshold;
    public Notification withThreshold(Double threshold) {
        this.threshold = threshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThresholdType")
    public ThresholdTypeEnum thresholdType;
    public Notification withThresholdType(ThresholdTypeEnum thresholdType) {
        this.thresholdType = thresholdType;
        return this;
    }
}