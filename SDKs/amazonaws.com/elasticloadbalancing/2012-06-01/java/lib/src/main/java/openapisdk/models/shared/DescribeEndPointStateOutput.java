package openapisdk.models.shared;



/**
 * DescribeEndPointStateOutput
 * Contains the output for DescribeInstanceHealth.
**/
public class DescribeEndPointStateOutput {
    public InstanceState[] instanceStates;
    public DescribeEndPointStateOutput withInstanceStates(InstanceState[] instanceStates) {
        this.instanceStates = instanceStates;
        return this;
    }
}