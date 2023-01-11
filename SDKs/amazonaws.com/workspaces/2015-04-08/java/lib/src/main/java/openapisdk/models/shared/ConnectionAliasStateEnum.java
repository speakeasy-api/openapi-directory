package openapisdk.models.shared;


public enum ConnectionAliasStateEnum {
    CREATING("CREATING"),
    CREATED("CREATED"),
    DELETING("DELETING");

    public final String value;

    private ConnectionAliasStateEnum(String value) {
        this.value = value;
    }
}
