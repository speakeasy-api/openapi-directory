package openapisdk.models.shared;


public enum DeliveryStatusEnum {
    SUCCESSFUL("SUCCESSFUL"),
    THROTTLED("THROTTLED"),
    TEMPORARY_FAILURE("TEMPORARY_FAILURE"),
    PERMANENT_FAILURE("PERMANENT_FAILURE"),
    UNKNOWN_FAILURE("UNKNOWN_FAILURE"),
    OPT_OUT("OPT_OUT"),
    DUPLICATE("DUPLICATE");

    public final String value;

    private DeliveryStatusEnum(String value) {
        this.value = value;
    }
}
