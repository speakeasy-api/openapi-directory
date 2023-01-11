package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrafficRoutingConfig
 * The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.
**/
public class TrafficRoutingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeBasedCanary")
    public TimeBasedCanary timeBasedCanary;
    public TrafficRoutingConfig withTimeBasedCanary(TimeBasedCanary timeBasedCanary) {
        this.timeBasedCanary = timeBasedCanary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeBasedLinear")
    public TimeBasedLinear timeBasedLinear;
    public TrafficRoutingConfig withTimeBasedLinear(TimeBasedLinear timeBasedLinear) {
        this.timeBasedLinear = timeBasedLinear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TrafficRoutingTypeEnum type;
    public TrafficRoutingConfig withType(TrafficRoutingTypeEnum type) {
        this.type = type;
        return this;
    }
}