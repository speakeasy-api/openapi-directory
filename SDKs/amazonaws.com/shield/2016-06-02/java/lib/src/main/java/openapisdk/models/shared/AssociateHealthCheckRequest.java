package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateHealthCheckRequest {
    @JsonProperty("HealthCheckArn")
    public String healthCheckArn;
    public AssociateHealthCheckRequest withHealthCheckArn(String healthCheckArn) {
        this.healthCheckArn = healthCheckArn;
        return this;
    }
    @JsonProperty("ProtectionId")
    public String protectionId;
    public AssociateHealthCheckRequest withProtectionId(String protectionId) {
        this.protectionId = protectionId;
        return this;
    }
}