package openapisdk.models.shared;



/**
 * DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget
 * One or more targets associated with the event window.
**/
public class DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget {
    public java.util.Map<String, Object> dedicatedHostIds;
    public DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget withDedicatedHostIds(java.util.Map<String, Object> dedicatedHostIds) {
        this.dedicatedHostIds = dedicatedHostIds;
        return this;
    }
    public java.util.Map<String, Object> instanceIds;
    public DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget withInstanceIds(java.util.Map<String, Object> instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}