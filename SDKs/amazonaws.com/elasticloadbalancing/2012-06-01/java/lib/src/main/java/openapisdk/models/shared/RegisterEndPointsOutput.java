package openapisdk.models.shared;



/**
 * RegisterEndPointsOutput
 * Contains the output of RegisterInstancesWithLoadBalancer.
**/
public class RegisterEndPointsOutput {
    public Instance[] instances;
    public RegisterEndPointsOutput withInstances(Instance[] instances) {
        this.instances = instances;
        return this;
    }
}