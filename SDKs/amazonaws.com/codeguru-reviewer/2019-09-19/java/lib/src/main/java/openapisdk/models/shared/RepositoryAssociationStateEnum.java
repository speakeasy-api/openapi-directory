package openapisdk.models.shared;


public enum RepositoryAssociationStateEnum {
    ASSOCIATED("Associated"),
    ASSOCIATING("Associating"),
    FAILED("Failed"),
    DISASSOCIATING("Disassociating"),
    DISASSOCIATED("Disassociated");

    public final String value;

    private RepositoryAssociationStateEnum(String value) {
        this.value = value;
    }
}
