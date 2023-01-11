package openapisdk.models.shared;



public class PoliciesType {
    public String nextToken;
    public PoliciesType withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public ScalingPolicy[] scalingPolicies;
    public PoliciesType withScalingPolicies(ScalingPolicy[] scalingPolicies) {
        this.scalingPolicies = scalingPolicies;
        return this;
    }
}