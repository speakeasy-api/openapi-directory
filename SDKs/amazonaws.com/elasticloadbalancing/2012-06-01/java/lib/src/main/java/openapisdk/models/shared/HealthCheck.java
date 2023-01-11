package openapisdk.models.shared;



/**
 * HealthCheck
 * Information about a health check.
**/
public class HealthCheck {
    public Long healthyThreshold;
    public HealthCheck withHealthyThreshold(Long healthyThreshold) {
        this.healthyThreshold = healthyThreshold;
        return this;
    }
    public Long interval;
    public HealthCheck withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    public String target;
    public HealthCheck withTarget(String target) {
        this.target = target;
        return this;
    }
    public Long timeout;
    public HealthCheck withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    public Long unhealthyThreshold;
    public HealthCheck withUnhealthyThreshold(Long unhealthyThreshold) {
        this.unhealthyThreshold = unhealthyThreshold;
        return this;
    }
}