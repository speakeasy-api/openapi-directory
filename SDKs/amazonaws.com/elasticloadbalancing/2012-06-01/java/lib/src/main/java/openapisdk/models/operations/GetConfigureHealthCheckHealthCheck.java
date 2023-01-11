package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetConfigureHealthCheckHealthCheck
 * Information about a health check.
**/
public class GetConfigureHealthCheckHealthCheck {
    @SpeakeasyMetadata("queryParam:name=HealthyThreshold")
    public Long healthyThreshold;
    public GetConfigureHealthCheckHealthCheck withHealthyThreshold(Long healthyThreshold) {
        this.healthyThreshold = healthyThreshold;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=Interval")
    public Long interval;
    public GetConfigureHealthCheckHealthCheck withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=Target")
    public String target;
    public GetConfigureHealthCheckHealthCheck withTarget(String target) {
        this.target = target;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=Timeout")
    public Long timeout;
    public GetConfigureHealthCheckHealthCheck withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=UnhealthyThreshold")
    public Long unhealthyThreshold;
    public GetConfigureHealthCheckHealthCheck withUnhealthyThreshold(Long unhealthyThreshold) {
        this.unhealthyThreshold = unhealthyThreshold;
        return this;
    }
}