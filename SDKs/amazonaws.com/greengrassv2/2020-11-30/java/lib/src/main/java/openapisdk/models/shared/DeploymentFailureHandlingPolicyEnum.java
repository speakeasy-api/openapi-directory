package openapisdk.models.shared;


public enum DeploymentFailureHandlingPolicyEnum {
    ROLLBACK("ROLLBACK"),
    DO_NOTHING("DO_NOTHING");

    public final String value;

    private DeploymentFailureHandlingPolicyEnum(String value) {
        this.value = value;
    }
}
