package openapisdk.models.shared;


public enum ResourceShareAssociationStatusEnum {
    ASSOCIATING("ASSOCIATING"),
    ASSOCIATED("ASSOCIATED"),
    FAILED("FAILED"),
    DISASSOCIATING("DISASSOCIATING"),
    DISASSOCIATED("DISASSOCIATED");

    public final String value;

    private ResourceShareAssociationStatusEnum(String value) {
        this.value = value;
    }
}
