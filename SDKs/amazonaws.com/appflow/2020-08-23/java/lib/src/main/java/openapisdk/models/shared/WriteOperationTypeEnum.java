package openapisdk.models.shared;


public enum WriteOperationTypeEnum {
    INSERT("INSERT"),
    UPSERT("UPSERT"),
    UPDATE("UPDATE");

    public final String value;

    private WriteOperationTypeEnum(String value) {
        this.value = value;
    }
}
