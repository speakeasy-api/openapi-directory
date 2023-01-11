package openapisdk.models.shared;


public enum CustomDomainAssociationStatusEnum {
    CREATING("CREATING"),
    CREATE_FAILED("CREATE_FAILED"),
    ACTIVE("ACTIVE"),
    DELETING("DELETING"),
    DELETE_FAILED("DELETE_FAILED"),
    PENDING_CERTIFICATE_DNS_VALIDATION("PENDING_CERTIFICATE_DNS_VALIDATION"),
    BINDING_CERTIFICATE("BINDING_CERTIFICATE");

    public final String value;

    private CustomDomainAssociationStatusEnum(String value) {
        this.value = value;
    }
}
