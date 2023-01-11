package openapisdk.models.shared;



public class DescribeTargetGroupsOutput {
    public String nextMarker;
    public DescribeTargetGroupsOutput withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    public TargetGroup[] targetGroups;
    public DescribeTargetGroupsOutput withTargetGroups(TargetGroup[] targetGroups) {
        this.targetGroups = targetGroups;
        return this;
    }
}