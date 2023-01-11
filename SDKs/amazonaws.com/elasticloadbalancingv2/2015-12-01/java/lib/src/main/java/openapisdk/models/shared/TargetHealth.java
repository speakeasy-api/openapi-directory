package openapisdk.models.shared;



/**
 * TargetHealth
 * Information about the current health of a target.
**/
public class TargetHealth {
    public String description;
    public TargetHealth withDescription(String description) {
        this.description = description;
        return this;
    }
    public TargetHealthReasonEnumEnum reason;
    public TargetHealth withReason(TargetHealthReasonEnumEnum reason) {
        this.reason = reason;
        return this;
    }
    public TargetHealthStateEnumEnum state;
    public TargetHealth withState(TargetHealthStateEnumEnum state) {
        this.state = state;
        return this;
    }
}