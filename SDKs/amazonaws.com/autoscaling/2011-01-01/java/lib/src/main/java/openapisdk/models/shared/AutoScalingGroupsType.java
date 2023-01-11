package openapisdk.models.shared;



public class AutoScalingGroupsType {
    public AutoScalingGroup[] autoScalingGroups;
    public AutoScalingGroupsType withAutoScalingGroups(AutoScalingGroup[] autoScalingGroups) {
        this.autoScalingGroups = autoScalingGroups;
        return this;
    }
    public String nextToken;
    public AutoScalingGroupsType withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}