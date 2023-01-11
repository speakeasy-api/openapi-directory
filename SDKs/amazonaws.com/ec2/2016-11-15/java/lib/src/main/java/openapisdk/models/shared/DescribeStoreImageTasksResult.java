package openapisdk.models.shared;



public class DescribeStoreImageTasksResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeStoreImageTasksResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> storeImageTaskResults;
    public DescribeStoreImageTasksResult withStoreImageTaskResults(java.util.Map<String, Object> storeImageTaskResults) {
        this.storeImageTaskResults = storeImageTaskResults;
        return this;
    }
}