package openapisdk.models.shared;


public enum ScalingPolicyUpdateBehaviorEnum {
    KEEP_EXTERNAL_POLICIES("KeepExternalPolicies"),
    REPLACE_EXTERNAL_POLICIES("ReplaceExternalPolicies");

    public final String value;

    private ScalingPolicyUpdateBehaviorEnum(String value) {
        this.value = value;
    }
}
