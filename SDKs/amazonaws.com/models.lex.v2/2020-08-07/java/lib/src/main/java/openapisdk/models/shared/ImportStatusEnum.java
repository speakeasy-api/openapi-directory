package openapisdk.models.shared;


public enum ImportStatusEnum {
    IN_PROGRESS("InProgress"),
    COMPLETED("Completed"),
    FAILED("Failed"),
    DELETING("Deleting");

    public final String value;

    private ImportStatusEnum(String value) {
        this.value = value;
    }
}
