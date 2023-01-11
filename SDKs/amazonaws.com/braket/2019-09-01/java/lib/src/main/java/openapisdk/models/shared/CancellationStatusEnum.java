package openapisdk.models.shared;


public enum CancellationStatusEnum {
    CANCELLING("CANCELLING"),
    CANCELLED("CANCELLED");

    public final String value;

    private CancellationStatusEnum(String value) {
        this.value = value;
    }
}
