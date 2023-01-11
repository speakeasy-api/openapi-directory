package openapisdk.models.shared;



/**
 * ModifyInstanceEventWindowResultInstanceEventWindow
 * Information about the event window.
**/
public class ModifyInstanceEventWindowResultInstanceEventWindow {
    public ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget associationTarget;
    public ModifyInstanceEventWindowResultInstanceEventWindow withAssociationTarget(ModifyInstanceEventWindowResultInstanceEventWindowAssociationTarget associationTarget) {
        this.associationTarget = associationTarget;
        return this;
    }
    public java.util.Map<String, Object> cronExpression;
    public ModifyInstanceEventWindowResultInstanceEventWindow withCronExpression(java.util.Map<String, Object> cronExpression) {
        this.cronExpression = cronExpression;
        return this;
    }
    public java.util.Map<String, Object> instanceEventWindowId;
    public ModifyInstanceEventWindowResultInstanceEventWindow withInstanceEventWindowId(java.util.Map<String, Object> instanceEventWindowId) {
        this.instanceEventWindowId = instanceEventWindowId;
        return this;
    }
    public java.util.Map<String, Object> name;
    public ModifyInstanceEventWindowResultInstanceEventWindow withName(java.util.Map<String, Object> name) {
        this.name = name;
        return this;
    }
    public java.util.Map<String, Object> state;
    public ModifyInstanceEventWindowResultInstanceEventWindow withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ModifyInstanceEventWindowResultInstanceEventWindow withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> timeRanges;
    public ModifyInstanceEventWindowResultInstanceEventWindow withTimeRanges(java.util.Map<String, Object> timeRanges) {
        this.timeRanges = timeRanges;
        return this;
    }
}