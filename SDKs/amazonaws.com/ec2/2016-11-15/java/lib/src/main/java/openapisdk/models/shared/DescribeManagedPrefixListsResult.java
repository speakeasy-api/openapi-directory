package openapisdk.models.shared;



public class DescribeManagedPrefixListsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeManagedPrefixListsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> prefixLists;
    public DescribeManagedPrefixListsResult withPrefixLists(java.util.Map<String, Object> prefixLists) {
        this.prefixLists = prefixLists;
        return this;
    }
}