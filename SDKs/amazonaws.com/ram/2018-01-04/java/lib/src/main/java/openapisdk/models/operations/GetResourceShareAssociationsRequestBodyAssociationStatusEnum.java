package openapisdk.models.operations;


public enum GetResourceShareAssociationsRequestBodyAssociationStatusEnum {
    ASSOCIATING("ASSOCIATING"),
    ASSOCIATED("ASSOCIATED"),
    FAILED("FAILED"),
    DISASSOCIATING("DISASSOCIATING"),
    DISASSOCIATED("DISASSOCIATED");

    public final String value;

    private GetResourceShareAssociationsRequestBodyAssociationStatusEnum(String value) {
        this.value = value;
    }
}
