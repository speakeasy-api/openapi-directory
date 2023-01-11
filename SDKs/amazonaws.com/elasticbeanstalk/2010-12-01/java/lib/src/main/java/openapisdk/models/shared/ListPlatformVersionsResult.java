package openapisdk.models.shared;



public class ListPlatformVersionsResult {
    public String nextToken;
    public ListPlatformVersionsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public PlatformSummary[] platformSummaryList;
    public ListPlatformVersionsResult withPlatformSummaryList(PlatformSummary[] platformSummaryList) {
        this.platformSummaryList = platformSummaryList;
        return this;
    }
}