package openapisdk.models.shared;



/**
 * CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget
 * One or more targets associated with the event window.
**/
public class CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget {
    public java.util.Map<String, Object> dedicatedHostIds;
    public CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget withDedicatedHostIds(java.util.Map<String, Object> dedicatedHostIds) {
        this.dedicatedHostIds = dedicatedHostIds;
        return this;
    }
    public java.util.Map<String, Object> instanceIds;
    public CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget withInstanceIds(java.util.Map<String, Object> instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}