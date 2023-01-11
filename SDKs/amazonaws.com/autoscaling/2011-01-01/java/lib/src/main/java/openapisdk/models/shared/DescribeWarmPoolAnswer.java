package openapisdk.models.shared;



public class DescribeWarmPoolAnswer {
    public Instance[] instances;
    public DescribeWarmPoolAnswer withInstances(Instance[] instances) {
        this.instances = instances;
        return this;
    }
    public String nextToken;
    public DescribeWarmPoolAnswer withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public WarmPoolConfiguration warmPoolConfiguration;
    public DescribeWarmPoolAnswer withWarmPoolConfiguration(WarmPoolConfiguration warmPoolConfiguration) {
        this.warmPoolConfiguration = warmPoolConfiguration;
        return this;
    }
}