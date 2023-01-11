package openapisdk.models.shared;



/**
 * GlobalNodeGroupList
 * Indicates the slot configuration and global identifier for a slice group.
**/
public class GlobalNodeGroupList {
    public String globalNodeGroupId;
    public GlobalNodeGroupList withGlobalNodeGroupId(String globalNodeGroupId) {
        this.globalNodeGroupId = globalNodeGroupId;
        return this;
    }
    public String slots;
    public GlobalNodeGroupList withSlots(String slots) {
        this.slots = slots;
        return this;
    }
}