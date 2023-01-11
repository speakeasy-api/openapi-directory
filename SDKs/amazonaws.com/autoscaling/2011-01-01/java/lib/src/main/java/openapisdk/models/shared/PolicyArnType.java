package openapisdk.models.shared;



/**
 * PolicyArnType
 * Contains the output of PutScalingPolicy.
**/
public class PolicyArnType {
    public Alarm[] alarms;
    public PolicyArnType withAlarms(Alarm[] alarms) {
        this.alarms = alarms;
        return this;
    }
    public String policyARN;
    public PolicyArnType withPolicyArn(String policyARN) {
        this.policyARN = policyARN;
        return this;
    }
}