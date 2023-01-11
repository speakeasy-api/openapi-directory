package openapisdk.models.shared;



/**
 * TargetGroupStickinessConfig
 * Information about the target group stickiness for a rule.
**/
public class TargetGroupStickinessConfig {
    public Long durationSeconds;
    public TargetGroupStickinessConfig withDurationSeconds(Long durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    public Boolean enabled;
    public TargetGroupStickinessConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}