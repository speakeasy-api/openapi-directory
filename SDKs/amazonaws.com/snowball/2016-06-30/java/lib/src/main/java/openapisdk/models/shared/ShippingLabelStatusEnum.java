package openapisdk.models.shared;


public enum ShippingLabelStatusEnum {
    IN_PROGRESS("InProgress"),
    TIMED_OUT("TimedOut"),
    SUCCEEDED("Succeeded"),
    FAILED("Failed");

    public final String value;

    private ShippingLabelStatusEnum(String value) {
        this.value = value;
    }
}
