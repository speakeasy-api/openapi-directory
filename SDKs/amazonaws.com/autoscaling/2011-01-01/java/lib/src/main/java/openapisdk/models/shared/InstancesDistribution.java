package openapisdk.models.shared;



/**
 * InstancesDistribution
 * <p>Describes an instances distribution for an Auto Scaling group with a <a>MixedInstancesPolicy</a>.</p> <p>The instances distribution specifies the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacities.</p> <p>When you modify <code>SpotAllocationStrategy</code>, <code>SpotInstancePools</code>, or <code>SpotMaxPrice</code> in the <a>UpdateAutoScalingGroup</a> API call, this update action does not deploy any changes across the running Amazon EC2 instances in the group. Your existing Spot Instances continue to run as long as the maximum price for those instances is higher than the current Spot price. When scale out occurs, Amazon EC2 Auto Scaling launches instances based on the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p>
**/
public class InstancesDistribution {
    public String onDemandAllocationStrategy;
    public InstancesDistribution withOnDemandAllocationStrategy(String onDemandAllocationStrategy) {
        this.onDemandAllocationStrategy = onDemandAllocationStrategy;
        return this;
    }
    public Long onDemandBaseCapacity;
    public InstancesDistribution withOnDemandBaseCapacity(Long onDemandBaseCapacity) {
        this.onDemandBaseCapacity = onDemandBaseCapacity;
        return this;
    }
    public Long onDemandPercentageAboveBaseCapacity;
    public InstancesDistribution withOnDemandPercentageAboveBaseCapacity(Long onDemandPercentageAboveBaseCapacity) {
        this.onDemandPercentageAboveBaseCapacity = onDemandPercentageAboveBaseCapacity;
        return this;
    }
    public String spotAllocationStrategy;
    public InstancesDistribution withSpotAllocationStrategy(String spotAllocationStrategy) {
        this.spotAllocationStrategy = spotAllocationStrategy;
        return this;
    }
    public Long spotInstancePools;
    public InstancesDistribution withSpotInstancePools(Long spotInstancePools) {
        this.spotInstancePools = spotInstancePools;
        return this;
    }
    public String spotMaxPrice;
    public InstancesDistribution withSpotMaxPrice(String spotMaxPrice) {
        this.spotMaxPrice = spotMaxPrice;
        return this;
    }
}