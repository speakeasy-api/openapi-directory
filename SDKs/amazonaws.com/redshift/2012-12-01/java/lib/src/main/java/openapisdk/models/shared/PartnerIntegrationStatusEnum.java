package openapisdk.models.shared;


public enum PartnerIntegrationStatusEnum {
    ACTIVE("Active"),
    INACTIVE("Inactive"),
    RUNTIME_FAILURE("RuntimeFailure"),
    CONNECTION_FAILURE("ConnectionFailure");

    public final String value;

    private PartnerIntegrationStatusEnum(String value) {
        this.value = value;
    }
}
