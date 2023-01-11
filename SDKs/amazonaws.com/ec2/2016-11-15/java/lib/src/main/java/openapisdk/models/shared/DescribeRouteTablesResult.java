package openapisdk.models.shared;



/**
 * DescribeRouteTablesResult
 * Contains the output of DescribeRouteTables.
**/
public class DescribeRouteTablesResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeRouteTablesResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> routeTables;
    public DescribeRouteTablesResult withRouteTables(java.util.Map<String, Object> routeTables) {
        this.routeTables = routeTables;
        return this;
    }
}