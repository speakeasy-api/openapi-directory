package openapisdk.models.shared;



/**
 * AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget
 * One or more targets associated with the event window.
**/
public class AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget {
    public java.util.Map<String, Object> dedicatedHostIds;
    public AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget withDedicatedHostIds(java.util.Map<String, Object> dedicatedHostIds) {
        this.dedicatedHostIds = dedicatedHostIds;
        return this;
    }
    public java.util.Map<String, Object> instanceIds;
    public AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget withInstanceIds(java.util.Map<String, Object> instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}