package openapisdk.models.shared;


public enum ServiceUpdateStatusEnum {
    AVAILABLE("available"),
    IN_PROGRESS("in-progress"),
    COMPLETE("complete"),
    SCHEDULED("scheduled");

    public final String value;

    private ServiceUpdateStatusEnum(String value) {
        this.value = value;
    }
}
