package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutScalingPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Alarms")
    public Alarm[] alarms;
    public PutScalingPolicyResponse withAlarms(Alarm[] alarms) {
        this.alarms = alarms;
        return this;
    }
    @JsonProperty("PolicyARN")
    public String policyARN;
    public PutScalingPolicyResponse withPolicyArn(String policyARN) {
        this.policyARN = policyARN;
        return this;
    }
}