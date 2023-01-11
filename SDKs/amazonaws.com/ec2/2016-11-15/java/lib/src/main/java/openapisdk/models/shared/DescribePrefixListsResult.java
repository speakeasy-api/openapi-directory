package openapisdk.models.shared;



public class DescribePrefixListsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribePrefixListsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> prefixLists;
    public DescribePrefixListsResult withPrefixLists(java.util.Map<String, Object> prefixLists) {
        this.prefixLists = prefixLists;
        return this;
    }
}