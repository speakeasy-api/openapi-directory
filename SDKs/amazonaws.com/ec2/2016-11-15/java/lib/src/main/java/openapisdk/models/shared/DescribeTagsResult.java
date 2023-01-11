package openapisdk.models.shared;



public class DescribeTagsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeTagsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public DescribeTagsResult withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}