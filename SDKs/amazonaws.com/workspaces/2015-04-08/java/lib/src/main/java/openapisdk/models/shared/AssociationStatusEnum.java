package openapisdk.models.shared;


public enum AssociationStatusEnum {
    NOT_ASSOCIATED("NOT_ASSOCIATED"),
    ASSOCIATED_WITH_OWNER_ACCOUNT("ASSOCIATED_WITH_OWNER_ACCOUNT"),
    ASSOCIATED_WITH_SHARED_ACCOUNT("ASSOCIATED_WITH_SHARED_ACCOUNT"),
    PENDING_ASSOCIATION("PENDING_ASSOCIATION"),
    PENDING_DISASSOCIATION("PENDING_DISASSOCIATION");

    public final String value;

    private AssociationStatusEnum(String value) {
        this.value = value;
    }
}
