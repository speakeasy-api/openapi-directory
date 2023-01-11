package openapisdk.models.shared;



public class ListDashboardsOutput {
    public DashboardEntry[] dashboardEntries;
    public ListDashboardsOutput withDashboardEntries(DashboardEntry[] dashboardEntries) {
        this.dashboardEntries = dashboardEntries;
        return this;
    }
    public String nextToken;
    public ListDashboardsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}