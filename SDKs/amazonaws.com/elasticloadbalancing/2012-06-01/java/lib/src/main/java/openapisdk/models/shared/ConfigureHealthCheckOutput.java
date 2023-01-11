package openapisdk.models.shared;



/**
 * ConfigureHealthCheckOutput
 * Contains the output of ConfigureHealthCheck.
**/
public class ConfigureHealthCheckOutput {
    public HealthCheck healthCheck;
    public ConfigureHealthCheckOutput withHealthCheck(HealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
}