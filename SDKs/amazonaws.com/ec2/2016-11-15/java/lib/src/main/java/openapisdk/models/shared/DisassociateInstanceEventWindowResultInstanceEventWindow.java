package openapisdk.models.shared;



/**
 * DisassociateInstanceEventWindowResultInstanceEventWindow
 * Information about the event window.
**/
public class DisassociateInstanceEventWindowResultInstanceEventWindow {
    public DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget associationTarget;
    public DisassociateInstanceEventWindowResultInstanceEventWindow withAssociationTarget(DisassociateInstanceEventWindowResultInstanceEventWindowAssociationTarget associationTarget) {
        this.associationTarget = associationTarget;
        return this;
    }
    public java.util.Map<String, Object> cronExpression;
    public DisassociateInstanceEventWindowResultInstanceEventWindow withCronExpression(java.util.Map<String, Object> cronExpression) {
        this.cronExpression = cronExpression;
        return this;
    }
    public java.util.Map<String, Object> instanceEventWindowId;
    public DisassociateInstanceEventWindowResultInstanceEventWindow withInstanceEventWindowId(java.util.Map<String, Object> instanceEventWindowId) {
        this.instanceEventWindowId = instanceEventWindowId;
        return this;
    }
    public java.util.Map<String, Object> name;
    public DisassociateInstanceEventWindowResultInstanceEventWindow withName(java.util.Map<String, Object> name) {
        this.name = name;
        return this;
    }
    public java.util.Map<String, Object> state;
    public DisassociateInstanceEventWindowResultInstanceEventWindow withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public DisassociateInstanceEventWindowResultInstanceEventWindow withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> timeRanges;
    public DisassociateInstanceEventWindowResultInstanceEventWindow withTimeRanges(java.util.Map<String, Object> timeRanges) {
        this.timeRanges = timeRanges;
        return this;
    }
}