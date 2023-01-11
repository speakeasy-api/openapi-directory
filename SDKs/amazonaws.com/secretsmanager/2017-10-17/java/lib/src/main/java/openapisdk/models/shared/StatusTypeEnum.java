package openapisdk.models.shared;


public enum StatusTypeEnum {
    IN_SYNC("InSync"),
    FAILED("Failed"),
    IN_PROGRESS("InProgress");

    public final String value;

    private StatusTypeEnum(String value) {
        this.value = value;
    }
}
