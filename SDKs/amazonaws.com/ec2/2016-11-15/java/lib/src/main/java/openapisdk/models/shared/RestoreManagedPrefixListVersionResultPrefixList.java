package openapisdk.models.shared;



/**
 * RestoreManagedPrefixListVersionResultPrefixList
 * Information about the prefix list.
**/
public class RestoreManagedPrefixListVersionResultPrefixList {
    public java.util.Map<String, Object> addressFamily;
    public RestoreManagedPrefixListVersionResultPrefixList withAddressFamily(java.util.Map<String, Object> addressFamily) {
        this.addressFamily = addressFamily;
        return this;
    }
    public java.util.Map<String, Object> maxEntries;
    public RestoreManagedPrefixListVersionResultPrefixList withMaxEntries(java.util.Map<String, Object> maxEntries) {
        this.maxEntries = maxEntries;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public RestoreManagedPrefixListVersionResultPrefixList withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> prefixListArn;
    public RestoreManagedPrefixListVersionResultPrefixList withPrefixListArn(java.util.Map<String, Object> prefixListArn) {
        this.prefixListArn = prefixListArn;
        return this;
    }
    public java.util.Map<String, Object> prefixListId;
    public RestoreManagedPrefixListVersionResultPrefixList withPrefixListId(java.util.Map<String, Object> prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    public java.util.Map<String, Object> prefixListName;
    public RestoreManagedPrefixListVersionResultPrefixList withPrefixListName(java.util.Map<String, Object> prefixListName) {
        this.prefixListName = prefixListName;
        return this;
    }
    public java.util.Map<String, Object> state;
    public RestoreManagedPrefixListVersionResultPrefixList withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> stateMessage;
    public RestoreManagedPrefixListVersionResultPrefixList withStateMessage(java.util.Map<String, Object> stateMessage) {
        this.stateMessage = stateMessage;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public RestoreManagedPrefixListVersionResultPrefixList withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> version;
    public RestoreManagedPrefixListVersionResultPrefixList withVersion(java.util.Map<String, Object> version) {
        this.version = version;
        return this;
    }
}