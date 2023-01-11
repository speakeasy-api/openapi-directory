package openapisdk.models.shared;



public class ListPlatformBranchesResult {
    public String nextToken;
    public ListPlatformBranchesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public PlatformBranchSummary[] platformBranchSummaryList;
    public ListPlatformBranchesResult withPlatformBranchSummaryList(PlatformBranchSummary[] platformBranchSummaryList) {
        this.platformBranchSummaryList = platformBranchSummaryList;
        return this;
    }
}