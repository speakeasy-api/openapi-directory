package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterRdsDbInstanceRequest {
    @JsonProperty("RdsDbInstanceArn")
    public String rdsDbInstanceArn;
    public DeregisterRdsDbInstanceRequest withRdsDbInstanceArn(String rdsDbInstanceArn) {
        this.rdsDbInstanceArn = rdsDbInstanceArn;
        return this;
    }
}