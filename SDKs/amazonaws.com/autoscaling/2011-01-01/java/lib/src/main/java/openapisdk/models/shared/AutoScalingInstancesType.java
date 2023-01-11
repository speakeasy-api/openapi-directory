package openapisdk.models.shared;



public class AutoScalingInstancesType {
    public AutoScalingInstanceDetails[] autoScalingInstances;
    public AutoScalingInstancesType withAutoScalingInstances(AutoScalingInstanceDetails[] autoScalingInstances) {
        this.autoScalingInstances = autoScalingInstances;
        return this;
    }
    public String nextToken;
    public AutoScalingInstancesType withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}