package openapisdk.models.operations;


public enum UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum {
    NO_SCHEDULE("NoSchedule"),
    PREFER_NO_SCHEDULE("PreferNoSchedule"),
    NO_EXECUTE("NoExecute");

    public final String value;

    private UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum(String value) {
        this.value = value;
    }
}
