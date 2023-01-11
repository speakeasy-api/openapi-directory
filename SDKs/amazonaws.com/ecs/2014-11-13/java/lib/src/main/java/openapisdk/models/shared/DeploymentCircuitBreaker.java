package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeploymentCircuitBreaker
 * <note> <p>The deployment circuit breaker can only be used for services using the rolling update (<code>ECS</code>) deployment type that are not behind a Classic Load Balancer.</p> </note> <p>The <b>deployment circuit breaker</b> determines whether a service deployment will fail if the service can't reach a steady state. If enabled, a service deployment will transition to a failed state and stop launching new tasks. You can also enable Amazon ECS to roll back your service to the last completed deployment after a failure. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html">Rolling update</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
**/
public class DeploymentCircuitBreaker {
    @JsonProperty("enable")
    public Boolean enable;
    public DeploymentCircuitBreaker withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonProperty("rollback")
    public Boolean rollback;
    public DeploymentCircuitBreaker withRollback(Boolean rollback) {
        this.rollback = rollback;
        return this;
    }
}