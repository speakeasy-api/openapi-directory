package openapisdk.models.shared;



/**
 * Alarm
 * Describes an alarm.
**/
public class Alarm {
    public String alarmARN;
    public Alarm withAlarmArn(String alarmARN) {
        this.alarmARN = alarmARN;
        return this;
    }
    public String alarmName;
    public Alarm withAlarmName(String alarmName) {
        this.alarmName = alarmName;
        return this;
    }
}