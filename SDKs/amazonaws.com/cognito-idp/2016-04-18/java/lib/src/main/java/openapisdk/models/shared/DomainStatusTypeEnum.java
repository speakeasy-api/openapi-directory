package openapisdk.models.shared;


public enum DomainStatusTypeEnum {
    CREATING("CREATING"),
    DELETING("DELETING"),
    UPDATING("UPDATING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED");

    public final String value;

    private DomainStatusTypeEnum(String value) {
        this.value = value;
    }
}
