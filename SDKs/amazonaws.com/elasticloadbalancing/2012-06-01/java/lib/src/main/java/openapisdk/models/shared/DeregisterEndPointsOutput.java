package openapisdk.models.shared;



/**
 * DeregisterEndPointsOutput
 * Contains the output of DeregisterInstancesFromLoadBalancer.
**/
public class DeregisterEndPointsOutput {
    public Instance[] instances;
    public DeregisterEndPointsOutput withInstances(Instance[] instances) {
        this.instances = instances;
        return this;
    }
}