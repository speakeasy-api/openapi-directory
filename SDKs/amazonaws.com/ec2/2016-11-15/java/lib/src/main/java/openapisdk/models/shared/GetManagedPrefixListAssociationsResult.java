package openapisdk.models.shared;



public class GetManagedPrefixListAssociationsResult {
    public java.util.Map<String, Object> nextToken;
    public GetManagedPrefixListAssociationsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> prefixListAssociations;
    public GetManagedPrefixListAssociationsResult withPrefixListAssociations(java.util.Map<String, Object> prefixListAssociations) {
        this.prefixListAssociations = prefixListAssociations;
        return this;
    }
}