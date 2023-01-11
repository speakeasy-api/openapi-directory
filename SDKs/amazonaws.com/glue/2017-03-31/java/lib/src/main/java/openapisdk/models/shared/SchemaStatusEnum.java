package openapisdk.models.shared;


public enum SchemaStatusEnum {
    AVAILABLE("AVAILABLE"),
    PENDING("PENDING"),
    DELETING("DELETING");

    public final String value;

    private SchemaStatusEnum(String value) {
        this.value = value;
    }
}
