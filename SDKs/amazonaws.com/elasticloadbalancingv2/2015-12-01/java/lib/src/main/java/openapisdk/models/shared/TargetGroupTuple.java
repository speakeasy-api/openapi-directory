package openapisdk.models.shared;



/**
 * TargetGroupTuple
 * Information about how traffic will be distributed between multiple target groups in a forward rule.
**/
public class TargetGroupTuple {
    public String targetGroupArn;
    public TargetGroupTuple withTargetGroupArn(String targetGroupArn) {
        this.targetGroupArn = targetGroupArn;
        return this;
    }
    public Long weight;
    public TargetGroupTuple withWeight(Long weight) {
        this.weight = weight;
        return this;
    }
}