package openapisdk.models.shared;


public enum DomainStatusEnum {
    PENDING_VALIDATION("PENDING_VALIDATION"),
    ASSOCIATING("ASSOCIATING"),
    ACTIVE("ACTIVE"),
    INACTIVE("INACTIVE"),
    DISASSOCIATING("DISASSOCIATING"),
    DISASSOCIATED("DISASSOCIATED"),
    FAILED_TO_ASSOCIATE("FAILED_TO_ASSOCIATE"),
    FAILED_TO_DISASSOCIATE("FAILED_TO_DISASSOCIATE");

    public final String value;

    private DomainStatusEnum(String value) {
        this.value = value;
    }
}
