package openapisdk.models.shared;



/**
 * CreateManagedPrefixListResultPrefixList
 * Information about the prefix list.
**/
public class CreateManagedPrefixListResultPrefixList {
    public java.util.Map<String, Object> addressFamily;
    public CreateManagedPrefixListResultPrefixList withAddressFamily(java.util.Map<String, Object> addressFamily) {
        this.addressFamily = addressFamily;
        return this;
    }
    public java.util.Map<String, Object> maxEntries;
    public CreateManagedPrefixListResultPrefixList withMaxEntries(java.util.Map<String, Object> maxEntries) {
        this.maxEntries = maxEntries;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateManagedPrefixListResultPrefixList withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> prefixListArn;
    public CreateManagedPrefixListResultPrefixList withPrefixListArn(java.util.Map<String, Object> prefixListArn) {
        this.prefixListArn = prefixListArn;
        return this;
    }
    public java.util.Map<String, Object> prefixListId;
    public CreateManagedPrefixListResultPrefixList withPrefixListId(java.util.Map<String, Object> prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    public java.util.Map<String, Object> prefixListName;
    public CreateManagedPrefixListResultPrefixList withPrefixListName(java.util.Map<String, Object> prefixListName) {
        this.prefixListName = prefixListName;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateManagedPrefixListResultPrefixList withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> stateMessage;
    public CreateManagedPrefixListResultPrefixList withStateMessage(java.util.Map<String, Object> stateMessage) {
        this.stateMessage = stateMessage;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateManagedPrefixListResultPrefixList withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> version;
    public CreateManagedPrefixListResultPrefixList withVersion(java.util.Map<String, Object> version) {
        this.version = version;
        return this;
    }
}