package openapisdk.models.shared;



/**
 * ModifyInstanceEventStartTimeResultEvent
 * Describes a scheduled event for an instance.
**/
public class ModifyInstanceEventStartTimeResultEvent {
    public java.util.Map<String, Object> code;
    public ModifyInstanceEventStartTimeResultEvent withCode(java.util.Map<String, Object> code) {
        this.code = code;
        return this;
    }
    public java.util.Map<String, Object> description;
    public ModifyInstanceEventStartTimeResultEvent withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> instanceEventId;
    public ModifyInstanceEventStartTimeResultEvent withInstanceEventId(java.util.Map<String, Object> instanceEventId) {
        this.instanceEventId = instanceEventId;
        return this;
    }
    public java.util.Map<String, Object> notAfter;
    public ModifyInstanceEventStartTimeResultEvent withNotAfter(java.util.Map<String, Object> notAfter) {
        this.notAfter = notAfter;
        return this;
    }
    public java.util.Map<String, Object> notBefore;
    public ModifyInstanceEventStartTimeResultEvent withNotBefore(java.util.Map<String, Object> notBefore) {
        this.notBefore = notBefore;
        return this;
    }
    public java.util.Map<String, Object> notBeforeDeadline;
    public ModifyInstanceEventStartTimeResultEvent withNotBeforeDeadline(java.util.Map<String, Object> notBeforeDeadline) {
        this.notBeforeDeadline = notBeforeDeadline;
        return this;
    }
}