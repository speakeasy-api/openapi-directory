package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdatePortalRequestBodyAlarms
 * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.
**/
public class UpdatePortalRequestBodyAlarms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alarmRoleArn")
    public String alarmRoleArn;
    public UpdatePortalRequestBodyAlarms withAlarmRoleArn(String alarmRoleArn) {
        this.alarmRoleArn = alarmRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationLambdaArn")
    public String notificationLambdaArn;
    public UpdatePortalRequestBodyAlarms withNotificationLambdaArn(String notificationLambdaArn) {
        this.notificationLambdaArn = notificationLambdaArn;
        return this;
    }
}