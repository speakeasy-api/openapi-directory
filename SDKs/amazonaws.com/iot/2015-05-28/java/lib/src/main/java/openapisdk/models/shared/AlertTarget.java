package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AlertTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertTargetArn")
    public String alertTargetArn;
    public AlertTarget withAlertTargetArn(String alertTargetArn) {
        this.alertTargetArn = alertTargetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public AlertTarget withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}