package openapisdk.models.shared;


public enum StateEnum {
    PENDING("Pending"),
    ACTIVE("Active"),
    INACTIVE("Inactive"),
    FAILED("Failed");

    public final String value;

    private StateEnum(String value) {
        this.value = value;
    }
}
