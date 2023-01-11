package openapisdk.models.shared;


public enum StatusEnum {
    AVAILABLE("AVAILABLE"),
    CREATING("CREATING"),
    FAILED("FAILED");

    public final String value;

    private StatusEnum(String value) {
        this.value = value;
    }
}
