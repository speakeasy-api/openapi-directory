package openapisdk.models.shared;



public class DescribeAccountLimitsAnswer {
    public Long maxNumberOfAutoScalingGroups;
    public DescribeAccountLimitsAnswer withMaxNumberOfAutoScalingGroups(Long maxNumberOfAutoScalingGroups) {
        this.maxNumberOfAutoScalingGroups = maxNumberOfAutoScalingGroups;
        return this;
    }
    public Long maxNumberOfLaunchConfigurations;
    public DescribeAccountLimitsAnswer withMaxNumberOfLaunchConfigurations(Long maxNumberOfLaunchConfigurations) {
        this.maxNumberOfLaunchConfigurations = maxNumberOfLaunchConfigurations;
        return this;
    }
    public Long numberOfAutoScalingGroups;
    public DescribeAccountLimitsAnswer withNumberOfAutoScalingGroups(Long numberOfAutoScalingGroups) {
        this.numberOfAutoScalingGroups = numberOfAutoScalingGroups;
        return this;
    }
    public Long numberOfLaunchConfigurations;
    public DescribeAccountLimitsAnswer withNumberOfLaunchConfigurations(Long numberOfLaunchConfigurations) {
        this.numberOfLaunchConfigurations = numberOfLaunchConfigurations;
        return this;
    }
}