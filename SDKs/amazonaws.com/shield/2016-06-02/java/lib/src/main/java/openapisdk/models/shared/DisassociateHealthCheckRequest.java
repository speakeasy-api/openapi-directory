package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateHealthCheckRequest {
    @JsonProperty("HealthCheckArn")
    public String healthCheckArn;
    public DisassociateHealthCheckRequest withHealthCheckArn(String healthCheckArn) {
        this.healthCheckArn = healthCheckArn;
        return this;
    }
    @JsonProperty("ProtectionId")
    public String protectionId;
    public DisassociateHealthCheckRequest withProtectionId(String protectionId) {
        this.protectionId = protectionId;
        return this;
    }
}