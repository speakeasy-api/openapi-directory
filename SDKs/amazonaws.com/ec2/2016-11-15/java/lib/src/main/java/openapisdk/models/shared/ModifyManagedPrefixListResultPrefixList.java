package openapisdk.models.shared;



/**
 * ModifyManagedPrefixListResultPrefixList
 * Information about the prefix list.
**/
public class ModifyManagedPrefixListResultPrefixList {
    public java.util.Map<String, Object> addressFamily;
    public ModifyManagedPrefixListResultPrefixList withAddressFamily(java.util.Map<String, Object> addressFamily) {
        this.addressFamily = addressFamily;
        return this;
    }
    public java.util.Map<String, Object> maxEntries;
    public ModifyManagedPrefixListResultPrefixList withMaxEntries(java.util.Map<String, Object> maxEntries) {
        this.maxEntries = maxEntries;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public ModifyManagedPrefixListResultPrefixList withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> prefixListArn;
    public ModifyManagedPrefixListResultPrefixList withPrefixListArn(java.util.Map<String, Object> prefixListArn) {
        this.prefixListArn = prefixListArn;
        return this;
    }
    public java.util.Map<String, Object> prefixListId;
    public ModifyManagedPrefixListResultPrefixList withPrefixListId(java.util.Map<String, Object> prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
    public java.util.Map<String, Object> prefixListName;
    public ModifyManagedPrefixListResultPrefixList withPrefixListName(java.util.Map<String, Object> prefixListName) {
        this.prefixListName = prefixListName;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ModifyManagedPrefixListResultPrefixList withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> stateMessage;
    public ModifyManagedPrefixListResultPrefixList withStateMessage(java.util.Map<String, Object> stateMessage) {
        this.stateMessage = stateMessage;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ModifyManagedPrefixListResultPrefixList withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> version;
    public ModifyManagedPrefixListResultPrefixList withVersion(java.util.Map<String, Object> version) {
        this.version = version;
        return this;
    }
}