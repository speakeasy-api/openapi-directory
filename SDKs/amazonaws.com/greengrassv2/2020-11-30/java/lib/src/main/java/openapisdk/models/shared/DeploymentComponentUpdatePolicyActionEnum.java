package openapisdk.models.shared;


public enum DeploymentComponentUpdatePolicyActionEnum {
    NOTIFY_COMPONENTS("NOTIFY_COMPONENTS"),
    SKIP_NOTIFY_COMPONENTS("SKIP_NOTIFY_COMPONENTS");

    public final String value;

    private DeploymentComponentUpdatePolicyActionEnum(String value) {
        this.value = value;
    }
}
