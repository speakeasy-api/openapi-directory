package openapisdk.models.shared;


public enum OperationStatusEnum {
    SUBMITTED("SUBMITTED"),
    PENDING("PENDING"),
    SUCCESS("SUCCESS"),
    FAIL("FAIL");

    public final String value;

    private OperationStatusEnum(String value) {
        this.value = value;
    }
}
