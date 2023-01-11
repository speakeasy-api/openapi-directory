package openapisdk.models.shared;


public enum OperationFilterNameEnum {
    NAMESPACE_ID("NAMESPACE_ID"),
    SERVICE_ID("SERVICE_ID"),
    STATUS("STATUS"),
    TYPE("TYPE"),
    UPDATE_DATE("UPDATE_DATE");

    public final String value;

    private OperationFilterNameEnum(String value) {
        this.value = value;
    }
}
