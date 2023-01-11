package openapisdk.models.shared;


public enum PrivateConnectionProvisioningFailureCauseEnum {
    CONNECTOR_AUTHENTICATION("CONNECTOR_AUTHENTICATION"),
    CONNECTOR_SERVER("CONNECTOR_SERVER"),
    INTERNAL_SERVER("INTERNAL_SERVER"),
    ACCESS_DENIED("ACCESS_DENIED"),
    VALIDATION("VALIDATION");

    public final String value;

    private PrivateConnectionProvisioningFailureCauseEnum(String value) {
        this.value = value;
    }
}
