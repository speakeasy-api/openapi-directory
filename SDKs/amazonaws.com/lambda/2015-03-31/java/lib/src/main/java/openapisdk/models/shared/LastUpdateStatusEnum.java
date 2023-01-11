package openapisdk.models.shared;


public enum LastUpdateStatusEnum {
    SUCCESSFUL("Successful"),
    FAILED("Failed"),
    IN_PROGRESS("InProgress");

    public final String value;

    private LastUpdateStatusEnum(String value) {
        this.value = value;
    }
}
