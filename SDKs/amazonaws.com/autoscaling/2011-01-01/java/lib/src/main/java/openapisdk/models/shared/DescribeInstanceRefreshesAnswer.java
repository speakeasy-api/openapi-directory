package openapisdk.models.shared;



public class DescribeInstanceRefreshesAnswer {
    public InstanceRefresh[] instanceRefreshes;
    public DescribeInstanceRefreshesAnswer withInstanceRefreshes(InstanceRefresh[] instanceRefreshes) {
        this.instanceRefreshes = instanceRefreshes;
        return this;
    }
    public String nextToken;
    public DescribeInstanceRefreshesAnswer withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}