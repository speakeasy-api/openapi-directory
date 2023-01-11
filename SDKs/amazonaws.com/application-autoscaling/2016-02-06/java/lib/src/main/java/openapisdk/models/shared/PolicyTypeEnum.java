package openapisdk.models.shared;


public enum PolicyTypeEnum {
    STEP_SCALING("StepScaling"),
    TARGET_TRACKING_SCALING("TargetTrackingScaling");

    public final String value;

    private PolicyTypeEnum(String value) {
        this.value = value;
    }
}
