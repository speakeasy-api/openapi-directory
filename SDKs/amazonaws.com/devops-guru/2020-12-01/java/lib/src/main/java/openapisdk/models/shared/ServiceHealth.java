package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceHealth
 * Represents the health of an AWS service.
**/
public class ServiceHealth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Insight")
    public ServiceInsightHealth insight;
    public ServiceHealth withInsight(ServiceInsightHealth insight) {
        this.insight = insight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceName")
    public ServiceNameEnum serviceName;
    public ServiceHealth withServiceName(ServiceNameEnum serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}