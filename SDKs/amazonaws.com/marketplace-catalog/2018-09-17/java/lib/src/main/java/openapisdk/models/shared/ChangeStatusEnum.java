package openapisdk.models.shared;


public enum ChangeStatusEnum {
    PREPARING("PREPARING"),
    APPLYING("APPLYING"),
    SUCCEEDED("SUCCEEDED"),
    CANCELLED("CANCELLED"),
    FAILED("FAILED");

    public final String value;

    private ChangeStatusEnum(String value) {
        this.value = value;
    }
}
