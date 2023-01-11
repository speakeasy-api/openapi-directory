package openapisdk.models.shared;


public enum LifecyclePolicyPreviewStatusEnum {
    IN_PROGRESS("IN_PROGRESS"),
    COMPLETE("COMPLETE"),
    EXPIRED("EXPIRED"),
    FAILED("FAILED");

    public final String value;

    private LifecyclePolicyPreviewStatusEnum(String value) {
        this.value = value;
    }
}
