package openapisdk.models.shared;


public enum StatusEnum {
    ACTIVE("Active"),
    INACTIVE("Inactive"),
    PENDING("Pending"),
    FAILED("Failed");

    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}
