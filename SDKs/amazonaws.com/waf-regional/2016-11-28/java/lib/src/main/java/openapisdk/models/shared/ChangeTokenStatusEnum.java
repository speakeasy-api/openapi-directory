package openapisdk.models.shared;


public enum ChangeTokenStatusEnum {
    PROVISIONED("PROVISIONED"),
    PENDING("PENDING"),
    INSYNC("INSYNC");

    public final String value;

    private ChangeTokenStatusEnum(String value) {
        this.value = value;
    }
}
