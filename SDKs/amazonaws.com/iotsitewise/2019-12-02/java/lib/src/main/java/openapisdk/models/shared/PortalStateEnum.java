package openapisdk.models.shared;


public enum PortalStateEnum {
    CREATING("CREATING"),
    UPDATING("UPDATING"),
    DELETING("DELETING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED");

    public final String value;

    private PortalStateEnum(String value) {
        this.value = value;
    }
}
