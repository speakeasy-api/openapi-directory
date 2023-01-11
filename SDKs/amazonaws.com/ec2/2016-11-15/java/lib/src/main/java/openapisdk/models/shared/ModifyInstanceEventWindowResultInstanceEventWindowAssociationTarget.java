package openapisdk.models.shared;



/**
 * ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget
 * One or more targets associated with the event window.
**/
public class ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget {
    public java.util.Map<String, Object> dedicatedHostIds;
    public ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget withDedicatedHostIds(java.util.Map<String, Object> dedicatedHostIds) {
        this.dedicatedHostIds = dedicatedHostIds;
        return this;
    }
    public java.util.Map<String, Object> instanceIds;
    public ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget withInstanceIds(java.util.Map<String, Object> instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}