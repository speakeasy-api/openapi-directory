package openapisdk.models.shared;


public enum OperationStatusEnum {
    NOT_STARTED("NotStarted"),
    STARTED("Started"),
    FAILED("Failed"),
    COMPLETED("Completed"),
    SUCCEEDED("Succeeded");

    public final String value;

    private OperationStatusEnum(String value) {
        this.value = value;
    }
}
