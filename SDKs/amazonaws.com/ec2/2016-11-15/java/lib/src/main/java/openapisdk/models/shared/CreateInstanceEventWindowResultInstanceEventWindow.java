package openapisdk.models.shared;



/**
 * CreateInstanceEventWindowResultInstanceEventWindow
 * Information about the event window.
**/
public class CreateInstanceEventWindowResultInstanceEventWindow {
    public CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget associationTarget;
    public CreateInstanceEventWindowResultInstanceEventWindow withAssociationTarget(CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget associationTarget) {
        this.associationTarget = associationTarget;
        return this;
    }
    public java.util.Map<String, Object> cronExpression;
    public CreateInstanceEventWindowResultInstanceEventWindow withCronExpression(java.util.Map<String, Object> cronExpression) {
        this.cronExpression = cronExpression;
        return this;
    }
    public java.util.Map<String, Object> instanceEventWindowId;
    public CreateInstanceEventWindowResultInstanceEventWindow withInstanceEventWindowId(java.util.Map<String, Object> instanceEventWindowId) {
        this.instanceEventWindowId = instanceEventWindowId;
        return this;
    }
    public java.util.Map<String, Object> name;
    public CreateInstanceEventWindowResultInstanceEventWindow withName(java.util.Map<String, Object> name) {
        this.name = name;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateInstanceEventWindowResultInstanceEventWindow withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateInstanceEventWindowResultInstanceEventWindow withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> timeRanges;
    public CreateInstanceEventWindowResultInstanceEventWindow withTimeRanges(java.util.Map<String, Object> timeRanges) {
        this.timeRanges = timeRanges;
        return this;
    }
}