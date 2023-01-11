package openapisdk.models.shared;


public enum SchemaVersionStatusEnum {
    AVAILABLE("AVAILABLE"),
    PENDING("PENDING"),
    FAILURE("FAILURE"),
    DELETING("DELETING");

    public final String value;

    private SchemaVersionStatusEnum(String value) {
        this.value = value;
    }
}
