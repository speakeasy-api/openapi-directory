package openapisdk.models.operations;



public class HealthCheckRequest {
    public HealthCheckSecurity security;
    public HealthCheckRequest withSecurity(HealthCheckSecurity security) {
        this.security = security;
        return this;
    }
}