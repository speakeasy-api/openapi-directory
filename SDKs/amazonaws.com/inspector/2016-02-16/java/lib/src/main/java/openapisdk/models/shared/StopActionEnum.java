package openapisdk.models.shared;


public enum StopActionEnum {
    START_EVALUATION("START_EVALUATION"),
    SKIP_EVALUATION("SKIP_EVALUATION");

    public final String value;

    private StopActionEnum(String value) {
        this.value = value;
    }
}
