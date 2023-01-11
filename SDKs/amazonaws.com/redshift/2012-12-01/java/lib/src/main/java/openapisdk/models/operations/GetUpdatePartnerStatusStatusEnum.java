package openapisdk.models.operations;


public enum GetUpdatePartnerStatusStatusEnum {
    ACTIVE("Active"),
    INACTIVE("Inactive"),
    RUNTIME_FAILURE("RuntimeFailure"),
    CONNECTION_FAILURE("ConnectionFailure");

    public final String value;

    private GetUpdatePartnerStatusStatusEnum(String value) {
        this.value = value;
    }
}
