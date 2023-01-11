package openapisdk.models.shared;



public class DescribeAccountLimitsOutput {
    public Limit[] limits;
    public DescribeAccountLimitsOutput withLimits(Limit[] limits) {
        this.limits = limits;
        return this;
    }
    public String nextMarker;
    public DescribeAccountLimitsOutput withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}