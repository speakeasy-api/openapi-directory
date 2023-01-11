package openapisdk.models.shared;



/**
 * AssociateInstanceEventWindowResultInstanceEventWindow
 * Information about the event window.
**/
public class AssociateInstanceEventWindowResultInstanceEventWindow {
    public AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget associationTarget;
    public AssociateInstanceEventWindowResultInstanceEventWindow withAssociationTarget(AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget associationTarget) {
        this.associationTarget = associationTarget;
        return this;
    }
    public java.util.Map<String, Object> cronExpression;
    public AssociateInstanceEventWindowResultInstanceEventWindow withCronExpression(java.util.Map<String, Object> cronExpression) {
        this.cronExpression = cronExpression;
        return this;
    }
    public java.util.Map<String, Object> instanceEventWindowId;
    public AssociateInstanceEventWindowResultInstanceEventWindow withInstanceEventWindowId(java.util.Map<String, Object> instanceEventWindowId) {
        this.instanceEventWindowId = instanceEventWindowId;
        return this;
    }
    public java.util.Map<String, Object> name;
    public AssociateInstanceEventWindowResultInstanceEventWindow withName(java.util.Map<String, Object> name) {
        this.name = name;
        return this;
    }
    public java.util.Map<String, Object> state;
    public AssociateInstanceEventWindowResultInstanceEventWindow withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public AssociateInstanceEventWindowResultInstanceEventWindow withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> timeRanges;
    public AssociateInstanceEventWindowResultInstanceEventWindow withTimeRanges(java.util.Map<String, Object> timeRanges) {
        this.timeRanges = timeRanges;
        return this;
    }
}